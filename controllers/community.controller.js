const Community = require('../models/community.model');
const { raiseException, responseServer } = require('../utils/response');
const { statusConstants } = require('../constants/status.constant');

const communityCtrl = {
  getCommunitys: async (req, res) => {
    try {
      const allproject = await Community.find();

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
module.exports = communityCtrl;
