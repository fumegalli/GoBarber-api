import User from '../models/User'
import File from '../models/File'

class ProviderController {
  async get(req, res) {
    const providers = await User.findAll({
      where: {
        provider: true,
      },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    })

    res.status(200).json(providers)
  }
}

export default new ProviderController()
