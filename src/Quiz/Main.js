import React, {useState} from 'react'
import Questions from './Questions'
import { Link } from 'react-router-dom'

function Main(props) {
    console.log('==== props - ', props);
    let questions;
    const path = props.path;
   
    const questions1 = [
        {
            questionNo: 1,
            question: 'What is the capital of India?',
            options: ['Delhi', 'Mumbai', 'Chennai', 'Pune'],
            answer: 'Delhi'
        },
        {
            questionNo: 2,
            question: 'What is the capital of Maharashtra?',
            options: ['Delhi', 'Mumbai', 'Chennai', 'Pune'],
            answer: 'Mumbai'
        },
        {
            questionNo: 3,
            question: 'What is the capital of the USA?',
            options: ['Washington DC', 'New York', 'London', 'Dubai'],
            answer: 'Washington DC'
        },
    ]
    const sports = [
        {
            questionNo: 1,
            question: 'What is the National sports of india?',
            options: ['BT', 'TT', 'swimming', 'hockey'],
            answer: 'hockey'
        },
        {
            questionNo: 2,
            question: 'No of players in cricket',
            options: ['11', '12', '13', '10'],
            answer: '11'
        }
    ]

    if( path == 'about') {
        questions = sports;
    } else if(path == '/') {
        questions = questions1;
    }

  return (
    <div>
        <Questions questions = {questions}/>
    
    </div>
  )
}

export default Main