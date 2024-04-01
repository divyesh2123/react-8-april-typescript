import React from 'react'
import data from './Data';
import { IReview } from './types/IReview';

export default function DisplayTypeData() {
  return (
    <div>{data.map((v:IReview,index:number)=>{

        return (<div>{v.job}</div>)

    })}</div>
  )
}
