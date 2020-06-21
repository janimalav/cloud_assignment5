
module.exports = {
  getParts: function (req408, res408) {
    Jobs.find({}).exec((error, jobs) => {
      if (error) {
        res408.send({
          code: '500',
          message: error
        });
      }
      res408.view('pages/get-jobs', { jobs: jobs });
    });
  },
  deleteJob: function (req408, res408) {
    Jobs.destroy({ jobName: req408.params.jobName }).exec((error) => {
      if (error) {
        res408.send({
          code: '500',
          message: error
        });
      }
      res408.redirect('/');
    }
    );
  },

  addJob: function (req408, res408) {

    var jobName = req408.body.jobName;
    var partID = req408.body.partID;
    var qty = req408.body.qty;

    Jobs.create({ jobName: jobName, partID: partID, qty: qty }).exec((error) => {
      if (error) {
        // res408.send({
        //   code: '500',
        //   message: error
        // });
        res408.serverError('Entered Job Already Exist');
      }
      res408.redirect('/');
    });
  },
  edit:function(req408,res408){
    Jobs.findOne({jobName:req408.params.jobName,partID:req408.params.partID}).exec((error,jobs)=>
    {
      if (error) {
        res408.send({
          code: '500',
          message: error
        });
      }
      res408.view('pages/edit',{jobs:jobs});
    });
  },
  putJobs:function(req408,res408){
    var jobName = req408.body.jobName;
    var qty = req408.body.qty;

    Jobs.update({jobName: jobName},{qty: qty }).exec((error) => {
      if (error) {
        res408.send({
          code: '500',
          message: error
        });
      }
      res408.redirect('/');
    });
    return false;
  }
};
