"use client"
import React from 'react'
import { Tree } from 'react-tree-graph';
import Navbar from '@/components/navbar/Navbar'
// import { Chart } from "react-google-charts";
// import Tree from 'react-d3-tree';
// import 'react-tree-graph/dist/style.css'
const data={
	name: 'Colour',


	textProps: {x: -25, y: 25},
	children: [{
		name: 'Black',
		pathProps: {className: 'black'},
		textProps: {x: -25, y: 25},
		children: []
	}, {
		name: 'Blue',
		pathProps: {className: 'blue'},
		textProps: {x: -25, y: 25},
		color: 'blue',
		children: []
	}, {
		name: 'Green',
		pathProps: {className: 'green'},
		textProps: {x: -25, y: 25},
		color: 'green',
		children: []
	}, {
		name: 'Purple',
		pathProps: {className: 'purple'},
		textProps: {x: -25, y: 25},
		color: 'purple',
		children: []
	}, {
		name: 'Red',
		pathProps: {className: 'red'},
		textProps: {x: -25, y: 25},
		color: 'red',
		children: []
	}, {
		name: 'White',
		pathProps: {className: 'grey'},
		textProps: {x: -25, y: 25},
		color: 'grey',
		children: []
	}, {
		name: 'Yellow',
		pathProps: {className: 'yellow'},
		textProps: {x: -25, y: 25},
		color: 'yellow',
		children: []
	}]
}

const page = () => {
  
  return (
    <div className='w-full h-screen bg-red-300'>
      <Navbar/>

      <p className='text-[3rem] font-bold text-center'>Finance</p>
      {/* <Chart
      chartType="WordTree"
      width="100%"
      height="400px"
      data={data}
      options={options}
    /> */}
        <div id="treeWrapper" className='w-fit  border mx-auto'>
        <Tree
   
      data={data}
      nodeRadius={100}
      margins={{ top: 2, bottom: 20, left: 50, right: 50 }}
     
	    height={400}
	    width={800}/>
    </div>
   
 
    </div>
  )
}

export default page