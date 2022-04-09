const Forecasts = require('../models/forecasts.model');
const { raiseException, responseServer } = require('../utils/response');
const { statusConstants } = require('../constants/status.constant');

const ForecastCtrl = {
  getForecast: async (req, res) => {
    try {
      const allproject = await Forecasts.find();

      return responseServer(
        res,
        statusConstants.SUCCESS_CODE,
        'Get data successfully',
        allproject
      );
    } catch (error) {
      return raiseException(res, statusConstants.BAD_REQUEST_CODE, error);
    }
  },
};
module.exports = ForecastCtrl;
