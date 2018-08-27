import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    // code to run on server at startup

    //Ccxt implementation
    const ccxt = require('ccxt');

    (async function main () {
        // Exchange Instantiation
        const exchange = new ccxt.binance ({
            apiKey: 'PVefYZQzFACzhbd8C2U79XSy8moeB0DI7FWVBNJJKWBYarsgsmxVAyZaMoPGCCWP',
            secret: 'rhPJFhJnon4x8oSCtL7noh8HqtSFB0OlaRH5OnOOX7WqMheyPEQMoMdghjVlkxBD',
            'enableRateLimit': true,
            //'verbose': true  //HTTP log for debugging
        });

        //Pre-loading markets
        let markets = await exchange.loadMarkets ();
        const symbol = 'ETH/BTC';

        //---------------------------------------------Public Endpoints-------------------------------------------------

        //Market Depth
        /*const limit = 5;
        const orderBook = await exchange.fetchOrderBook (symbol, limit);
        console.log(orderBook);*/

        //Market Price
        /*const limit = 5;
        const orderBook = await exchange.fetchOrderBook (symbol, limit);
        let bid = orderBook.bids.length ? orderBook.bids[0][0] : undefined;
        let ask = orderBook.asks.length ? orderBook.asks[0][0] : undefined;
        let spread = (bid && ask) ? ask - bid : undefined;
        console.log (exchange.id, 'market price', { bid, ask, spread });*/

        //Ticker data for a single symbol
        /*let ticker = await exchange.fetchTicker(symbol);
        console.log (ticker);*/

        //OHLCV for Candlestick bar
        /*const ohlcv = await exchange.fetchOHLCV(symbol,'1m');
        console.log(ohlcv);*/

        //Trades
        /*const trades = await exchange.fetchTrades(symbol);
        console.log(trades)*/

        //--------------------------------------------Private Endpoints-------------------------------------------------

        //Account Balance
        /*const balance = await exchange.fetchBalance();
        console.log(balance);*/

        //Orders
        /*const orders = await exchange.fetchOrders(symbol);
        console.log(orders);*/

        //Personal Trades
        /*const trades = await exchange.fetchMyTrades(symbol);
        console.log(trades);*/
    } ());
});


