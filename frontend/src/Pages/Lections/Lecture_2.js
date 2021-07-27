import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { data } from './data';


const Todo = (props) => {
    const {id, lecture}=useParams();
    useEffect(() => {
      // Обновляем заголовок документа с помощью API браузера
      var a = new Date
      var Vhod = console.log(`Дата входа: ${a}`,lecture,'Тема:',id)
      
      return () => {
      var b = new Date
      var Vihod = console.log(`Дата выхода: ${b}`)

      console.log(`Cреднее время на странице: `,Math.round((b-a)/1000),'секунд')
      };
    });
    return(
        <Typography style={{whiteSpace: 'pre-wrap'}}>
            {data[lecture][id].title}
        </Typography>
    )
}
 
// Среднее время в день:
 if (!sessionStorage.getItem('startTime')) {
    
     sessionStorage.setItem('startTime', Date.now());
   }
  
   const enterTime = sessionStorage.getItem('startTime')
  
   const showPopup = () => {
     let currentTime = Date.now()
     let spentTime = Math.round((currentTime - enterTime) / 1000)
     //console.log(`Среднее время в день: `,spentTime)
     }
   const timer = setInterval(showPopup, 10000)

    export default Todo;