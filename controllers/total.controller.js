const Total = require('../models/total.model');
const { raiseException, responseServer } = require('../utils/response');
const { statusConstants } = require('../constants/status.constant');

const TotalCtrl = {
  getTotal: async (req, res) => {
    try {
      const allproject = await Total.find();

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
module.exports = TotalCtrl;
