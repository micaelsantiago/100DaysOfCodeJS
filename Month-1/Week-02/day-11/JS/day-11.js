function transformToIp(ip){
	let ip_list = [];

	for (let i = 0; i < ip.length; i += 4){
		let part1 = ip[i];
		let part2 = ip[i + 2];
		let part3 = ip[i + 3];
		let part4 = ip[i + 4];

		if (part1 >= 0 && part1 <= 255 && part2 >= 0 && part2 <= 255 && part3 >= 0 && part3 <= 255 && part4 >= 0 && part4 <= 255){
			ip_list.push(`${part1}.${part2}.${part3}.${part4}`);
		}
	}

	return console.log(ip_list);
};

transformToIp('1111');