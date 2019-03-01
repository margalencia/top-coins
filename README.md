# Top Coins App
The solution for [frontend-engineer-challenge-top-coins](https://github.com/WATTx/code-challenges/blob/master/frontend-engineer-challenge-top-coins.md) task

## How to run the solution
1. Get you API Key for https://sandbox.coinmarketcap.com/ or use mine, I've added `.env` file to repo for simplicity. 
2. In `.env` file (it's in the project root) change `API_KEY` and `APP_PORT` (the port on what the proxy server will start).
3. Run `npm i` and `npm start` in the project root.
4. Go to server's folder `cd src/sever` and run `npm i` and `npm start`.
5. Go to `http://localhost:3000` to see the application.

## The problem and the solution
The task is to create a SPA for a simple analysis of crypto assets. 
The app should fetch all the required data from the [coinmarketcap.com](https://coinmarketcap.com/api/).
As this service doesn't allow making HTTP requests on the client side, I've created a proxy server using Koa framework.

On the client-side I've used React and it's new feature React Hooks. For the project set up I've used Create React App.
As a component library I've choosed Material UI and also styled-components for styling.
For the chart I decided to use Recharts library as I've already had some experience with it and it solves the task pretty fine.

I'm not sure that I understood correctly what does absolute price change (24h) mean. 
I calculate it this way: take an absolute of the (price * percent_change) / (100 + percent_change).

### What would I do next
1. More test covering;
2. Page layout with Material UI Grid system (didn't have enough time to learn how to use it), 
so currently the UI is not very responsive;
3. Error handling on the client-side using `componentDidCatch`;
4. Show loader while fetching the data from API, because sometimes it takes several seconds;
5. Or add pagination or virtual scroll to the table.