import React from 'react'
import { calender, dollar , comment,trash, freelance, money , stocks, users, card, book, piggy, medical, food, clothing, circle } from '../../utils/icons';
import styled from 'styled-components';
import Button from '../Button/Button';
import { dateFormat } from '../../utils/dateFormat';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {

    const categoryIcon=()=>{
        switch(category){
            case 'salary':
                return money;
            case 'freelancing':
                return freelance;
            case 'investments':
                return stocks;
            case 'stocks':
                return users;
            case 'Bank':
                return card;
            case 'Education':
                return book;
            case 'other':
                return piggy;
            default:
                return '';
        }
    }
    const expenseCatIcon=()=>{
        switch(category){
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return '';
        }
    }
  return (
    <IncomeItemStyled indicator={indicatorColor}>
        <div className='icon'>
            {type==='expense' ? expenseCatIcon(): categoryIcon()}
        </div>
        <div className='content'>
            <h5>{title}</h5>
            <div className='inner-content'>
                <div className='text'>
                    <p>
                        {dollar}{amount}
                    </p>
                    <p>
                        {calender}{dateFormat(date)}
                    </p>
                    <p>
                        {comment}
                        {description}
                    </p>
                </div>
                <div className='btn-con'>
                    <Button
                        icon={trash}
                        bPad={'1rem'}
                        bRad={'50%'}
                        bg={'#DC143C'}
                        color={'#fff'}
                        iColor={'#fff'}
                        hColor={'var(--color-green)'}
                        onClick={()=>deleteItem(id)}
                        
                    />
                </div>
            </div>
        </div>
    </IncomeItemStyled>
  )
}


const IncomeItemStyled=styled.div`
    background:transparent;
    border:2px solid purple;
    box-shadow:0px 1px 15px rgba(0,0,0,0.06);
    border-radius:10px;
    padding:0.40rem;
    margin-bottom:1rem;
    display:flex;
    align-items:center;
    gap:1rem;
    width:100%;
    color:#222260;
    .icon{
        width:70px;
        height:70px;
        border-radius:40px;
        background: transparent;
        display:flex;
        align-items:center;
        justify-content:center;
        border:2px solid blue;
        i{
            font-size:2.6rem;
        }
    }
    .content{
        flex:1;
        display:flex;
        flex-direction:column;
        gap: .2rem;
        h5{
            font-size:1.2rem;
            padding-left:2rem;
            position:relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }
        .inner-content{
            margin-top:-10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                font-size:1.0rem;
                display: flex;
                align-items: center;
                gap: 1.5rem;
                p{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.8;
                }
            }
        }
    }
`;

export default IncomeItem
