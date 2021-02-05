/**
 * FilesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  upload: (req, res) => {
    req.file('foto') // this is the name of the file in your multipart form
      .upload({
        // optional
        dirname: process.cwd() + '/.tmp/public/images/'
      }, async (err, uploads) => {
        // try to always handle errors
        if (err) { return res.serverError(err) }
        // uploads is an array of files uploaded 
        // so remember to expect an array object
        if (uploads.length === 0) { return res.badRequest('No file was uploaded, check de params name') }
        // if file was uploaded create a new registry
        // at this point the file is phisicaly available in the hard drive
        Files.create({
          path: uploads[0].fd,
          url: `http://localhost:8080/images/${uploads[0].fd.replace(`${process.cwd()}/.tmp/public/images/`, '')}`,
          filename: uploads[0].filename,
        })
        .meta({
          fetch: true
        })
        .exec(function(err, file) {
          if (err) { return res.serverError(err) }
          // if it was successful return the registry in the response
          return res.json(file)
        })
      })
  },
  download: function(req, res) {
    var fileID = req.param('id') 
    // gets the id either in urlencode, body or url query
    Files
      .findOne({ id: fileID })
        .meta({
          fetch: true
        })
        .exec((err, file) => {
          if (err) { return res.serverError(err) }
          if (!file) { return res.notFound() }
          // we use the res.download function to download the file 
          // and send a ok response
          res.download(file.path)
      })
  }
};

