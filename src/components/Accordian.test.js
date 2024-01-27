import {screen,render, fireEvent} from '@testing-library/react'
import Accordian from './Accordian'


test('Test if the queries are rendered',()=>
{
    let {getAllByRole}=render(<Accordian/>)
    let allQueries=getAllByRole('query')
    expect(allQueries.length).toEqual(5)

    
    let expandButtons=getAllByRole('expand')
    fireEvent.click(expandButtons[0])
    let allInfo=getAllByRole('info')
    expect(allInfo[0].textContent.length).toBeGreaterThan(50)
})
