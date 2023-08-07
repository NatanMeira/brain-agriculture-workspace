import { api } from '../api';
import { GetDashboardDataDto } from './dto';

export class DashboardService {
  async getDashboardData(): Promise<GetDashboardDataDto> {
    const { data } = await api.get('/dashboard');
    return data;
  }
}
