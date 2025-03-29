'use client'
import { useState, useEffect } from 'react';

interface TypeWriterProps {
    text: string;
    delay: number;
    infinite?: boolean; // ADD THIS LINE
}
 
export const TypeWriter = ({ text, delay, infinite }: TypeWriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     let timeout:NodeJS.Timeout;

//     console.log('text :: ', text);
    
//     if (currentIndex < text.length) {
//       timeout = setTimeout(() => {
//         setCurrentText(prevText => prevText + text[currentIndex]);
//         setCurrentIndex(prevIndex => prevIndex + 1);
//       }, delay);

//     } else if (infinite) { // ADD THIS CHECK
//       setCurrentIndex(0);
//       setCurrentText('');
//     }

    
//     return () => clearTimeout(timeout);
//   }, [currentIndex, delay, infinite, text]);

// 
useEffect(() => {
    /*Create a new setInterval and store its id*/
    const animKey = setInterval(() => {
        setCurrentIndex((index) => {
        /*This setState function will set the index
        to index+1 if there is more content otherwise
        it will destory this animation*/

        if (index >= text.length - 1) {
          clearInterval(animKey);
          return index;
        }
        return index + 1;
      });
    }, delay);
  }, []);

  useEffect(() => {
      setCurrentText((prevText) => prevText + text[currentIndex]);
    }, [currentIndex, text]);  
// 

  return <span>{currentText}</span>;
};
