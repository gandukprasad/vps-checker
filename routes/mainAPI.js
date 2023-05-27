var express = require("express")

const compute = require('@google-cloud/compute');
const {InstancesClient} = require('@google-cloud/compute').v1;



var router = express.Router();
router.get("/", (req, res, next) => {
    

    const instanceID = '' +req.query.instance;
    const zoneID = ''+req.query.zone
   

  const computeClient = new InstancesClient();

  async function callStart() {
    const request = {
      instance:instanceID,
      project:'fabled-frame-383008',
      zone:zoneID,
    };

    // Run request
    const response = await computeClient.get(request)
      res.send(JSON.stringify(
          {data:response}
      ))
  }

  callStart();
}
)

module.exports = router;