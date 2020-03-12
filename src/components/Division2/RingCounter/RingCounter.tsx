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
   * Ring outer radius
   * @default (size - (strokeWidth * 2)) / 2
   */
  outerRadius?: number;
  /**
   * Ring inner radius
   * @default outerRadius * 0.35
   */
  innerRadius?: number;
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
   * Stroke width
   * @default 1
   */
  strokeWidth: number;
  /**
   * Active meter color
   * When you required to change color each meters, you should set array.
   * @default #EC6226
   */
  activeColor: string | string[];
  /**
   * If the value is greater than the color size, repeat active color.
   * If you set this value to false, the larger active meter uses last color setting in array.
   *
   * @memo This setting is ONLY available when you set array to 'color' props.
   * @default true
   */
  repeatActiveColor: boolean;
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
    outerRadius,
    innerRadius,
    strokeColor,
    strokeWidth,
    activeColor,
    repeatActiveColor,
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
      .outerRadius(outerRadius ?? (size - strokeWidth * 2) / 2)
      .innerRadius(innerRadius ?? size * 0.35);

    pieGroup
      .append('path')
      // @ts-ignore
      .attr('d', arc)
      .attr('fill', (_: number, index: number) => {
        if (!repeatActiveColor) {
          return index < value ? _color[index >= _color.length ? _color.length - 1 : index] : nonActiveColor;
        } else {
          return index < value ? _color[index % _color.length] : nonActiveColor;
        }
      })
      .attr('stroke', strokeColor)
      .attr('stroke-width', strokeWidth);

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
  }, [
    max,
    value,
    size,
    padAngle,
    outerRadius,
    innerRadius,
    repeatActiveColor,
    strokeColor,
    strokeWidth,
    _color,
    nonActiveColor,
    countFontSize,
    countFontColor,
    countText
  ]);

  return <svg ref={rootRef}></svg>;
};

RingCounter.defaultProps = {
  size: 100,
  max: 10,
  padAngle: 0.1,
  repeatActiveColor: true,
  strokeColor: 'white',
  strokeWidth: 1,
  activeColor: '#EC6226',
  nonActiveColor: '#CCC',
  countFontSize: 28,
  countFontColor: '#AAA'
};

export { RingCounter };
