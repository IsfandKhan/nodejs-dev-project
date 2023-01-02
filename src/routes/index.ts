import { Router, Response, Request } from 'express';

const indexRouter: Router = Router();

indexRouter.get('/', (_req: Request, res: Response) => res.render('main', { layout: 'index' }));

enum Trends {
  INCREASE = 'increase',
  DECREASE = 'decrease',
  STABLE = 'stable',
}

indexRouter.get('/api/report', (req, res) => {
  res.status(200).json([
    {
      title: 'Volume',
      points: '60.94',
      amount: '171,143',
      trend: Trends.INCREASE,
    },
    {
      title: 'Profits',
      points: '60.94',
      amount: '171,143',
      increase: Trends.DECREASE,
    },
    {
      title: 'Losses',
      points: '60.94',
      amount: '171,143',
      increase: Trends.INCREASE,
    },
    {
      title: 'Active wallets',
      points: '60.94',
      increase: Trends.INCREASE,
    },
    {
      title: 'New wallets',
      points: '60.94',
      increase: Trends.INCREASE,
    },
  ]);
});

indexRouter.get('/api/feed', (req, res) => {
  res.status(200).json([
    {
      title: 'hodlponkz',
      impressions: Math.floor(Math.random() * 8),
      boughtForPoints: 'Ξ245.2',
      boughtForAmount: '442,102',
      nfti: '760.12',
      adjustment: '760.12',
      profit: '514.92',
      loss: '',
      duration: 5,
    },
    {
      title: 'hodlponkz',
      impressions: Math.floor(Math.random() * 10),
      boughtForPoints: 'Ξ245.2',
      boughtForAmount: '442,102',
      nfti: '760.12',
      adjustment: '760.12',
      profit: '',
      loss: '122.5',
      duration: 5,
    },
    {
      title: 'hodlponkz',
      impressions: Math.floor(Math.random() * 10),
      boughtForPoints: 'Ξ245.2',
      boughtForAmount: '442,102',
      nfti: '760.12',
      adjustment: '760.12',
      profit: '248.2',
      loss: '',
      duration: 5,
    },
    {
      title: 'hodlponkz',
      impressions: Math.floor(Math.random() * 10),
      boughtForPoints: 'Ξ245.2',
      boughtForAmount: '442,102',
      nfti: '760.12',
      adjustment: '760.12',
      profit: '382.4',
      loss: '',
      duration: 5,
    },
    {
      title: 'hodlponkz',
      impressions: Math.floor(Math.random() * 10),
      boughtForPoints: 'Ξ245.2',
      boughtForAmount: '442,102',
      nfti: '760.12',
      adjustment: '760.12',
      profit: '514.92',
      loss: '',
      duration: 5,
    },
    {
      title: 'hodlponkz',
      impressions: Math.floor(Math.random() * 10),
      boughtForPoints: 'Ξ245.2',
      boughtForAmount: '442,102',
      nfti: '760.12',
      adjustment: '760.12',
      profit: '514.92',
      loss: '',
      duration: 5,
    },
  ]);
});

indexRouter.get('/api/estimates', (req, res) => {
  res.status(200).json({
    totalRecords: 1250,
    category: 'whale',
    estimates: [
      {
        title: 'Est. Profit',
        points: '781.9',
        percentage: '60',
      },
      {
        title: 'Est. Loss',
        points: '781.9',
        percentage: '40',
      },
      {
        title: 'Gas Fees',
        points: '781.9',
        percentage: '10',
      },
      {
        title: 'Bought',
        points: '781.9',
        percentage: '70',
      },
      {
        title: 'Sold',
        points: '781.9',
        percentage: '20',
      },
      {
        title: 'Transferred',
        points: '781.9',
        percentage: '5',
      },
      {
        title: 'Listed',
        points: '781.9',
        percentage: '30',
      },
    ],
  });
});

export { indexRouter };
