/**
 * @license Highstock JS v8.0.3 (2020-03-06)
 *
 * Indicator series type for Highstock
 *
 * (c) 2010-2019 Sebastian Bochan
 *
 * License: www.highcharts.com/license
 */
'use strict';
(function (factory) {
    if (typeof module === 'object' && module.exports) {
        factory['default'] = factory;
        module.exports = factory;
    } else if (typeof define === 'function' && define.amd) {
        define('highcharts/indicators/trendline', ['highcharts', 'highcharts/modules/stock'], function (Highcharts) {
            factory(Highcharts);
            factory.Highcharts = Highcharts;
            return factory;
        });
    } else {
        factory(typeof Highcharts !== 'undefined' ? Highcharts : undefined);
    }
}(function (Highcharts) {
    var _modules = Highcharts ? Highcharts._modules : {};
    function _registerModule(obj, path, args, fn) {
        if (!obj.hasOwnProperty(path)) {
            obj[path] = fn.apply(null, args);
        }
    }
    _registerModule(_modules, 'indicators/trendline.src.js', [_modules['parts/Utilities.js']], function (U) {
        /* *
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        var isArray = U.isArray,
            seriesType = U.seriesType;
        /**
         * The Trend line series type.
         *
         * @private
         * @class
         * @name Highcharts.seriesTypes.trendline
         *
         * @augments Highcharts.Series
         */
        seriesType('trendline', 'sma', 
        /**
         * Trendline (linear regression) fits a straight line to the selected data
         * using a method called the Sum Of Least Squares. This series requires the
         * `linkedTo` option to be set.
         *
         * @sample stock/indicators/trendline
         *         Trendline indicator
         *
         * @extends      plotOptions.sma
         * @since        7.1.3
         * @product      highstock
         * @requires     stock/indicators/indicators
         * @requires     stock/indicators/trendline
         * @optionparent plotOptions.trendline
         */
        {
            /**
             * @excluding period
             */
            params: {
                /**
                 * The point index which indicator calculations will base. For
                 * example using OHLC data, index=2 means the indicator will be
                 * calculated using Low values.
                 *
                 * @default 3
                 */
                index: 3
            }
        }, 
        /**
         * @lends Highcharts.Series#
         */
        {
            nameBase: 'Trendline',
            nameComponents: false,
            getValues: function (series, params) {
                var xVal = series.xData,
                    yVal = series.yData,
                    LR = [],
                    xData = [],
                    yData = [],
                    sumX = 0,
                    sumY = 0,
                    sumXY = 0,
                    sumX2 = 0,
                    xValLength = xVal.length,
                    index = params.index,
                    alpha,
                    beta,
                    i,
                    x,
                    y;
                // Get sums:
                for (i = 0; i < xValLength; i++) {
                    x = xVal[i];
                    y = isArray(yVal[i]) ? yVal[i][index] : yVal[i];
                    sumX += x;
                    sumY += y;
                    sumXY += x * y;
                    sumX2 += x * x;
                }
                // Get slope and offset:
                alpha = (xValLength * sumXY - sumX * sumY) /
                    (xValLength * sumX2 - sumX * sumX);
                if (isNaN(alpha)) {
                    alpha = 0;
                }
                beta = (sumY - alpha * sumX) / xValLength;
                // Calculate linear regression:
                for (i = 0; i < xValLength; i++) {
                    x = xVal[i];
                    y = alpha * x + beta;
                    // Prepare arrays required for getValues() method
                    LR[i] = [x, y];
                    xData[i] = x;
                    yData[i] = y;
                }
                return {
                    xData: xData,
                    yData: yData,
                    values: LR
                };
            }
        });
        /**
         * A `TrendLine` series. If the [type](#series.trendline.type) option is not
         * specified, it is inherited from [chart.type](#chart.type).
         *
         * @extends   series,plotOptions.trendline
         * @since     7.1.3
         * @product   highstock
         * @excluding dataParser, dataURL
         * @requires  stock/indicators/indicators
         * @requires  stock/indicators/trendline
         * @apioption series.trendline
         */
        ''; // to include the above in the js output

    });
    _registerModule(_modules, 'masters/indicators/trendline.src.js', [], function () {


    });
}));