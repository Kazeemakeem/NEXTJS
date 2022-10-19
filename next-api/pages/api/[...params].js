
// specify double square brackets optional navigation to api root route

export default function handler (req, res) {
  const {params} = req.query
  res.status(200).json(params)
}