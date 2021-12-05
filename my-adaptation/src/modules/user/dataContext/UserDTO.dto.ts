export namespace UserDTO {
	type UserRules = {
		role: 'HRBP' | 'DM' | 'INTERN'; // hrbp, dm, zdm etc
		rules: Array<{ step: number; rule: 'admin' | 'mentor' | 'watcher' | 'intern' }>;
	};
	type UserInfo = {
		id: string;
		fullname: string;
		position: string;
	};

	export type User = UserRules & UserInfo;
}
