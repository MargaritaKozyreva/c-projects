import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProgressDTO } from '@modules/ProgressBar/dataContext/ProgressDTO.dto';
import { httpService } from '@core/httpService/service';

export const getEducationsById = createAsyncThunk(
	'list/getEducationsById',
	async(id: number) => {
		const tag = await httpService.post<ProgressDTO.Step>('getEducationsById', { id });
		return tag;
	}
);
