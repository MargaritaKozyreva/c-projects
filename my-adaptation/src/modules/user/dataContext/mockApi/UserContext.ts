import { httpServiceMock, ResponseResult } from '@core/httpService/service';
import { UserDTO } from '../UserDTO.dto';

class UserContext {
	getUserProgress(): ResponseResult<UserDTO.User> {
		return httpServiceMock<UserDTO.User>({
			id: '88549653',
			fullname: 'Козырева Маргарита Анатольевна',
			position: 'Директор магазина',
			role: 'DM',
			rules: [{ step: 1, rule: 'mentor' }, { step: 2, rule: 'watcher' }]
		});
	}
}

export const userContext = new UserContext();
