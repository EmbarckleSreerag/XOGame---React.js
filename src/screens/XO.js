
import React, { useState } from "react";
import "./xo.css"


function XO() {
    const line = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ]
    // const random = Math.floor(Math.random() * 10);
    const [player, setPlayer] = useState('x');
    const [cell, setCell] = useState(Array(9).fill(''));
    const [win, setWin] = useState('');







    const onsubmit = (num) => {
        const squares = [...cell];


        if (squares[num] !== '') {
            return;
        }

        if (player === 'x') {
            squares[num] = 'x';
            setPlayer('o');

        }
        automation(squares);
        setCell(squares);
        console.log(squares);
        winner(squares);
    }

    



    const automation = (squares, num) => {
        let random = Math.floor(Math.random() * 9);
   
    console.log('random value check.........................................' + random);
    //    squares[line[0][1]]='sreerag'


        let previousNum = 0;
           if (squares[random]!=''){
               if (random!=previousNum){
                   previousNum=random;
               }

           }

        if (squares[random] === '') {


            squares[random] = 'o';


            setPlayer('x');

         } 
         else {
            for (let i = 0; i < line.length; i++) {
                console.log("value of i " +line[i]);
                console.log("value of i555 " +line[2]);
                console.log('value of lines .................' +line[i])
                const [a, b, c] = line[i];
                console.log('i print check' + i)
                if (squares[a] === '') {
                    squares[a] = 'o';
                    console.log('aaaaaa')
                    setPlayer('x');
                    break;
                } else if (squares[b] === '') {
                    squares[b] = 'o';
                    console.log('bbbbbb')
                    setPlayer('x');
                    break;
                } else if (squares[c] === '')  {
                    squares[c] = 'o';
                    console.log('ccccccc')
                    setPlayer('x');
                    break;
                }else{
                    console.log('hoi')
                }
            }

        
       }
        //  else{
        //     for (let i = 0; i < line.length; ++i) {
        //                 console.log("value of i " +i);
                        
        //                 console.log('i print check' + i)
        //                 if (squares[i] === '') {
        //                     squares[i] = 'o';
                        
        //                     setPlayer('x');
                            
        //                 }
        //             }

        //  }



    }




    const winner = (squares) => {
        let combination = {
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]
            ],
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]
            ],
            diagonal: [
                [0, 4, 8],
                [2, 4, 6]
            ]
        }
        let remaining = 8;
        for (let c in combination) {
            console.log(combination[c]);
            combination[c].forEach(element => {
                if (squares[element[0]] && squares[element[0]] === squares[element[1]] && squares[element[1]] === squares[element[2]]) {
                    setWin(squares[element[0]])
                    setCell([])
                    console.log('remaining' + remaining)
                }
                if (squares[element[0]] && squares[element[1]] && squares[element[2]]) {
                    remaining -= 1;
                    console.log('remaining ' + remaining)
                }
            });
        }
        if (remaining === 0) {
            setWin('draw')
            setCell([])
        }
    }

    return (
        <div className="container">
            <div className="table td">
                {(!win) &&
                    <table>
                        {/* <h1>Turn:{player}</h1> */}
                        <tbody>
                            <tr>
                                <td onClick={() => onsubmit(0)} className="tableStyle">{cell[0]}</td>
                                <td onClick={() => onsubmit(1)} className="tableStyle">{cell[1]}</td>
                                <td onClick={() => onsubmit(2)} className="tableStyle">{cell[2]}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td onClick={() => onsubmit(3)} className="tableStyle">{cell[3]}</td>
                                <td onClick={() => onsubmit(4)} className="tableStyle">{cell[4]}</td>
                                <td onClick={() => onsubmit(5)} className="tableStyle">{cell[5]}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td onClick={() => onsubmit(6)} className="tableStyle">{cell[6]}</td>
                                <td onClick={() => onsubmit(7)} className="tableStyle">{cell[7]}</td>
                                <td onClick={() => onsubmit(8)} className="tableStyle">{cell[8]}</td>
                            </tr>
                        </tbody>
                    </table>

                }
                {win && <div className="alert">
                    <p>winner:{win}</p>
                </div>
                }
            </div>
        </div>
    );
}

export default XO;