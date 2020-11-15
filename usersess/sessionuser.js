const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({ 
        message: 'Handling GET requests to /avrpage'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({ 
        message: 'Handling POST requests to /avrpage'
    });
});

router.get('/:fileId',(req, res, next) => {
const fileId = req.params.fileId;
  
if (fileId in totalResults) {
  const requestedResult = totalResults[fileId];
  console.log(requestedResult);
  if (requestedResult === null) {
    res.json({hasId: true, processingFinished: false});
  } else {
    res.json({hasId: true, processingFinished: true, requestedResult});
  }
} else {
  res.json({hasId: false});
};
});

router.post('/:fileId',(req, res, next) => {
    const fileId = req.body.fileId;
  const filteredData = req.body.filteredData;
  const days = req.body.days;
  
  totalResults[fileId] = null;
  
  let processedResults = 0;
  let users = 0;
  let sessions = 0;
  filteredData.forEach((item) => {
    users += item['Users'];
    sessions += item['Sessions'];
  });
  processedResults = (sessions / users).toFixed(2);
  });
  for (let key of Object.keys(processedResults)) {
    processedResults[key] = Math.round((processedResults[key] / days) * 100) / 100;
  }

module.exports = router;