import { api } from '../api';
import {
  CreateFarmProducerDto,
  FindAllFarmProducerDto,
  UpdateFarmProducerDto,
} from './dto';

export class FarmProducerService {
  async findAll(query?: FindAllFarmProducerDto) {
    const { data } = await api.get('farm-producer', { params: query });
    return data;
  }

  async findOne(id: string) {
    const { data } = await api.get(`farm-producer/${id}`);
    return data;
  }

  async create(body: CreateFarmProducerDto) {
    try {
      const { data } = await api.post('farm-producer', body);
      return data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }

  async update(id: string, body: UpdateFarmProducerDto) {
    try {
      const { data } = await api.patch(`farm-producer/${id}`, body);
      return data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }

  async delete(id: string) {
    const { data } = await api.delete(`farm-producer/${id}`);
    return data;
  }
}
