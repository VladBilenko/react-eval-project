import React from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'
import './chart.css'

class ChartComponent extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    title: PropTypes.string
  };

  componentDidMount () {
    this.renderChart()
  }

  componentDidUpdate () {
    this.renderChart()
  }

  render () {
    const {width, height, title} = this.props
    return (
      <div className='chart__container'>
        <h5 className='chart__title'>{title}</h5>
        <svg ref={chart => (this.chart = chart)}
          width={width} height={height} />
      </div>
    )
  }

  renderChart () {
    const {data, width, height} = this.props

    const margin = {top: 20, right: 30, bottom: 30, left: 40}
    const chartWidth = width - margin.left - margin.right
    const chartHeight = height - margin.top - margin.bottom
    const formatCount = d3.format(',.0f')

    if (data.length) {
      const values = this.mapDateValues(data)
      const x = this.getHorizontalRange(values, chartWidth)
      const xAxis = this.getXAxis(x)
      const bins = this.getBins(values, x)
      const y = this.getVerticalRange(bins, chartHeight)
      const svg = this.selectSvg(margin, chartWidth, chartHeight)
      const bars = this.selectBars(bins, svg, x, y)

      bars.append('rect')
        .attr('x', 1)
        .attr('width', (x(bins[0].dx) - x(0)) - 1)
        .attr('height', d => (chartHeight - y(d.y)))

      bars.append('text')
        .attr('dy', '.75em')
        .attr('y', -20)
        .attr('x', (x(bins[0].dx) - x(0)) / 2)
        .attr('text-anchor', 'middle')
        .text(d => (formatCount(d.y)))

      svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', `translate(0,${chartHeight})`)
        .call(xAxis)
    }
  }

  mapDateValues (arr) {
    const dates = arr.map(item => (new Date(item.createdAt)))

    return dates.sort((a, b) => (a - b))
  }

  getMinAndMaxValue (arr) {
    const oneDayMillis = 86400000

    return [arr[0].getTime() - oneDayMillis, (arr[arr.length - 1]).getTime() + oneDayMillis]
  }

  getHorizontalRange (arr, width) {
    return d3.time.scale()
      .domain(this.getMinAndMaxValue(arr))
      .range([0, width])
  }

  getVerticalRange (bins, height) {
    const yMax = d3.max(bins, d => (d.length))

    return d3.scale.linear()
      .domain([0, yMax])
      .range([height, 0])
  }

  getBins (arr, x) {
    return d3.layout.histogram().bins(x.ticks(6))(arr)
  }

  getXAxis (x) {
    const formatDate = d3.time.format('%d.%m.%y')

    return d3.svg.axis()
      .scale(x)
      .ticks(3)
      .orient('bottom')
      .tickFormat(formatDate)
  }

  selectSvg (margin, width, height) {
    return d3.select(this.chart)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)
  }

  selectBars (bins, svg, x, y) {
    return svg.selectAll('.bar')
      .data(bins)
      .enter().append('g')
      .attr('class', 'bar')
      .attr('transform', d => (`translate(${x(d.x)},${y(d.y)})`))
  }
}

export default ChartComponent
