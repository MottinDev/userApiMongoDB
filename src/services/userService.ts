import User, { IUser } from '../models/userModel';

export default {
  async getUsers(): Promise<IUser[]> {
    return await User.find();
  },

  async createUser(data: Partial<IUser>): Promise<IUser> {
    const { cpf, email, telefone } = data;

    const userExists = await User.findOne({ $or: [{ cpf }, { email }, { telefone }] });
    if (userExists) {
      throw new Error('CPF, email ou telefone já cadastrado');
    }

    const newUser = new User(data);
    return await newUser.save();
  },

  async updateUser(id: string, data: Partial<IUser>): Promise<IUser | null> {
    return await User.findByIdAndUpdate(id, data, { new: true });
  },

  async deleteUser(id: string): Promise<void> {
    await User.findByIdAndDelete(id);
  }
};
