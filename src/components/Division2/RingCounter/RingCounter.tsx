import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export type RingCounterProps = {
  /**
   * Ring size (px)
   * @default 100
   */
  size: number;
  /**
   * Progress value
   */
  value: number;
  /**
   * Max
   * @default 10
   */
  max: number;
  /**
   * Angle padding
   * @default 0.1
   */
  padAngle: number;
  /**
   * Stroke color
   * @default white
   */
  strokeColor: string;
  /**
   * Meter color
   * When you required to change color each meters, you should set array.
   * @default #FF8800
   */
  color: string | string[];
  /**
   * Background color
   * @default #CCC
   */
  backgroundColor: string;
  /**
   * Count font size (px)
   * @default 14
   */
  fontSize: number;
  /**
   * Count font color
   * @default #CCC
   */
  fontColor: string;
};

const RingCounter = (props: RingCounterProps) => {
  const { value, max, size, padAngle, strokeColor, color, backgroundColor, fontSize, fontColor } = props;

  const rootRef = useRef<SVGSVGElement>(null);

  const _color = React.useMemo(() => (Array.isArray(color) ? color : [color]), [color]);

  useEffect(() => {
    const svgCanvas = d3
      .select(rootRef.current)
      .attr('width', size)
      .attr('height', size);
    svgCanvas.selectAll('*').remove();

    var dataset = Array(max).fill(1);

    const g = svgCanvas.append('g').attr('transform', 'translate(' + size / 2 + ',' + size / 2 + ')');

    var pie = d3.pie().padAngle(padAngle);

    var pieGroup = g
      .selectAll('.pie')
      .data(pie(dataset))
      .enter()
      .append('g')
      .attr('class', 'pie');

    const arc = d3
      .arc()
      .outerRadius(size / 2)
      .innerRadius(size * 0.35);

    pieGroup
      .append('path')
      // @ts-ignore
      .attr('d', arc)
      .attr('fill', (_: number, index: number) => {
        return index < value ? _color[index % _color.length] : backgroundColor;
      })
      .attr('stroke', strokeColor);

    const text = g
      .append('text')
      .attr('font-weight', 'bold')
      .attr('fill', fontColor)
      .attr('text-anchor', 'middle')
      .attr('font-size', fontSize)
      .attr('alignment-baseline', 'ideographic')
      .text(value);

    const node = text.node();
    if (node !== null) {
      text.attr('dy', node.getBoundingClientRect().height / 2);
    }
  }, [max, value, size, padAngle, strokeColor, _color, backgroundColor, fontSize, fontColor]);

  return <svg ref={rootRef}></svg>;
};

RingCounter.defaultProps = {
  size: 100,
  max: 10,
  padAngle: 0.1,
  strokeColor: 'white',
  color: '#FF8800',
  backgroundColor: '#CCC',
  fontSize: 28,
  fontColor: '#AAA'
};

export { RingCounter };
