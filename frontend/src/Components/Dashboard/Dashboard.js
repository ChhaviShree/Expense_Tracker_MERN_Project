import React, { useEffect } from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import Chart from '../Chart/Chart';
import { useGlobalContext } from '../../context/globalContext';
import { dollar } from '../../utils/icons';

function Dashboard() {
  const {totalExpense,totalIncome,totalBalance,getExpenses,getIncomes}=useGlobalContext()
  useEffect(()=>{
    getIncomes()
    getExpenses()
  },[])
  return (
    <DashboardStyled>
        <InnerLayout>
            <h2>All transactions</h2>
            <div className='stats-con'>
              <div className='chart-con'>
                  <Chart/>
                  <div className='amount-con'>
                    <div className='income'>
                      <h3>Total Income</h3>
                      <p>
                        {dollar}{totalIncome()}
                      </p>
                    </div>
                    <div className='expense'>
                      <h3>Total Expenses</h3>
                      <p>
                        {dollar}{totalExpense()}
                      </p>
                    </div>
                    <div className='balance'>
                      <h3>Total Balance</h3>
                      <p>
                      {dollar}{totalBalance()}
                      </p>
                    </div>
                  </div>
              </div>
              <div className='history-con'>

              </div>
            </div>
        </InnerLayout>
    </DashboardStyled>
  )
}
const DashboardStyled=styled.div`
    
`;
export default Dashboard
