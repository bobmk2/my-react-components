import React, { useEffect, useRef, useMemo } from 'react';
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
   * Active meter color
   * When you required to change color each meters, you should set array.
   * @default #EC6226
   */
  activeColor: string | string[];
  /**
   * Non-active meter color
   * @default #CCC
   */
  nonActiveColor: string;
  /**
   * Count font size (px)
   * @default 14
   */
  countFontSize: number;
  /**
   * Count font color
   * @default #CCC
   */
  countFontColor: string;
  /**
   * Count format function
   */
  countFormatter?: (count: number) => number | string;
};

const RingCounter = (props: RingCounterProps) => {
  const {
    value,
    max,
    size,
    padAngle,
    strokeColor,
    activeColor,
    nonActiveColor,
    countFontSize,
    countFontColor,
    countFormatter
  } = props;

  const rootRef = useRef<SVGSVGElement>(null);

  const _color = useMemo(() => (Array.isArray(activeColor) ? activeColor : [activeColor]), [activeColor]);

  const countText = useMemo(() => {
    if (value === null || typeof value === 'undefined' || isNaN(value)) {
      return '';
    }
    return typeof countFormatter !== 'undefined' ? countFormatter(value) : value;
  }, [value, countFormatter]);

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
        return index < value ? _color[index % _color.length] : nonActiveColor;
      })
      .attr('stroke', strokeColor);

    const text = g
      .append('text')
      .attr('font-weight', 'bold')
      .attr('fill', countFontColor)
      .attr('text-anchor', 'middle')
      .attr('font-size', countFontSize)
      .attr('alignment-baseline', 'ideographic')
      .text(countText);

    const node = text.node();
    if (node !== null) {
      text.attr('dy', node.getBoundingClientRect().height / 2);
    }
  }, [max, value, size, padAngle, strokeColor, _color, nonActiveColor, countFontSize, countFontColor, countText]);

  return <svg ref={rootRef}></svg>;
};

RingCounter.defaultProps = {
  size: 100,
  max: 10,
  padAngle: 0.1,
  strokeColor: 'white',
  activeColor: '#EC6226',
  nonActiveColor: '#CCC',
  countFontSize: 28,
  countFontColor: '#AAA'
};

export { RingCounter };
