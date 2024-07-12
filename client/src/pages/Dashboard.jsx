import React from "react";
import styled from "styled-components";
import {counts} from "../utils/data"; 
import CountsCard from "../Components/cards/CountsCard";
import WeeklyStat from "../Components/cards/WeeklyStat";
import CategoryChart from "../Components/cards/CategoryChart";
import AddWorkout from "../Components/AddWorkout";


const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;
const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const Title = styled.div`
padding: 0px 16px
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;
const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;


const Count = styled.div``;


const Dashboard = () => {

  const data = {
    totalCaloriesBurnt:13500,
    totalWorkouts: 6,
    avgCaloriesBurntPerWorkout: 2250,
    totalCaloriesBurnt:{
        weeks:["17th","18th","19th","20th","21st"],
        caloriesBurned: [10500,0,0,0,0,0,13500] 
    },
    pieChartData:[
        {
            id:0,
            value:6000,
            label:"legs",
        },
        {
          id:1,
          value:1500,
          label:"back",
      },
      {
        id:2,
        value:3750,
        label:"Shoulder",
    },
    {
      id:3,
      value:2250,
      label:"abs",
  },
    ]
}

  return (
    <Container>
      <Wrapper>
        <Title> Dashboard</Title>
        <FlexWrap>
            {counts.map((item) =>(
                < CountsCard  item={item} />
            ) )}
         </FlexWrap>

         <FlexWrap>
            <WeeklyStat data={data}/>
            <CategoryChart data={data} />
            <AddWorkout/>
         </FlexWrap>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
