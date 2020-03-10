import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
// import { css } from 'emotion';

const styles = {};

export type RingStepIndicatorProps = {
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
   *
   */
  max: number;
  /**
   * Step
   * @default 1
   */
  step: number;
  /**
   * Angle padding
   * @default 0.1
   */
  padAngle: number;
};

const RingStepIndicator = (props: RingStepIndicatorProps) => {
  const { value, max, size, padAngle } = props;

  const rootRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // const g = d3.select('.rects');
    // console.log('---> ', g);
    // g.append('div').html('Hello D3 !!');
    // // const boxes = g.selectAll('rect').text('test');
    const svgCanvas = d3
      .select(rootRef.current)
      .attr('width', size)
      .attr('height', size);

    const width = size;
    const height = size;

    var dataset = Array(max).fill(1);

    const g = svgCanvas.append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

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
      .attr('d', arc)
      .attr('fill', (_: number, index: number) => {
        return index < value ? '#FF8800' : '#CCCCCC';
      })
      .attr('stroke', 'white');
  }, [max, size, value, padAngle]);

  return (
    <div style={{ fontSize: 0, display: 'inline-block', backgroundColor: '#0AF' }}>
      <svg ref={rootRef}></svg>
    </div>
    //   <svg style={{ width: size, height: size }}>
    //     <g className='rects' />
    //   </svg>
  );
  // return <div style={{ width: size, height: size, backgroundColor: '#FA0' }}>Test</div>;
};

RingStepIndicator.defaultProps = {
  size: 100,
  max: 10,
  step: 1,
  padAngle: 0.1
};

export { RingStepIndicator };
