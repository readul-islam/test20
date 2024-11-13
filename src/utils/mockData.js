import { v4 as uuidv4 } from "uuid";

export const agentHeaderData = [
	"Agent Name",
	"Commission Win",
	"Commission Loss",
	"Active",
	"Related Accounts",
	"Action",
];

export const agentRowData = [
	{
		id: uuidv4(),
		agent_name: "David Johnson",
		commission_win: "1.25",
		commission_loss: "0.60",
		active: false,
		related_accounts: 4,
	},
	{
		id: uuidv4(),
		agent_name: "David Johnson",
		commission_win: "1.25",
		commission_loss: "0.60",
		active: false,
		related_accounts: 4,
	},
	{
		id: uuidv4(),
		agent_name: "Smith Johnson",
		commission_win: "1.25",
		commission_loss: "0.60",
		active: false,
		related_accounts: 4,
	},
	{
		id: uuidv4(),
		agent_name: "Emily Brown",
		commission_win: "1.75",
		commission_loss: "0.85",
		active: false,
		related_accounts: 6,
	},
	{
		id: uuidv4(),
		agent_name: "Michael Wilson",
		commission_win: "1.90",
		commission_loss: "1.10",
		active: true,
		related_accounts: 3,
	},
	{
		id: uuidv4(),
		agent_name: "Jennifer Garcia",
		commission_win: "1.40",
		commission_loss: "0.70",
		active: false,
		related_accounts: 4,
	},
	{
		id: uuidv4(),
		agent_name: "William Martinez",
		commission_win: "2.20",
		commission_loss: "1.20",
		active: false,
		related_accounts: 5,
	},
	{
		id: uuidv4(),
		agent_name: "Linda Robinson",
		commission_win: "1.60",
		commission_loss: "0.80",
		active: true,
		related_accounts: 2,
	},
	{
		id: uuidv4(),
		agent_name: "Thomas Clark",
		commission_win: "1.80",
		commission_loss: "1.00",
		active: false,
		related_accounts: 3,
	},
	{
		id: uuidv4(),
		agent_name: "Mary Hall",
		commission_win: "2.10",
		commission_loss: "1.15",
		active: false,
		related_accounts: 4,
	},
	{
		id: uuidv4(),
		agent_name: "Christopher King",
		commission_win: "1.70",
		commission_loss: "0.90",
		active: true,
		related_accounts: 3,
	},
	{
		id: uuidv4(),
		agent_name: "Patricia Lee",
		commission_win: "2.05",
		commission_loss: "1.05",
		active: false,
		related_accounts: 6,
	},
	{
		id: uuidv4(),
		agent_name: "Robert Adams",
		commission_win: "1.55",
		commission_loss: "0.75",
		active: false,
		related_accounts: 5,
	},
	{
		id: uuidv4(),
		agent_name: "Barbara White",
		commission_win: "1.95",
		commission_loss: "1.05",
		active: true,
		related_accounts: 4,
	},
];

export const accountHeaderData = [
	"Account Label",
	"Agent",
	"Account Name",
	"Currency",
	"Effective Stake",
	"Commission Win",
	"Commission Loss",
	"Active",
	"Action",
];

export const accountRowData = [
	{
		id: uuidv4(),
		account_label: "pcx600901(bet961)",
		agent: "Bet961",
		account_name: "pcx600901",
		currency: "EUR",
		effective_stake: "150",
		commission_win: "0.50",
		commission_loss: "0.25",
		active: true,
	},
	{
		id: uuidv4(),
		account_label: "pcx600902(bet962)",
		agent: "Bet962",
		account_name: "pcx600902",
		currency: "GBP",
		effective_stake: "200",
		commission_win: "1.00",
		commission_loss: "0.75",
		active: false,
	},
	{
		id: uuidv4(),
		account_label: "pcx600903(bet963)",
		agent: "Bet963",
		account_name: "pcx600903",
		currency: "AUD",
		effective_stake: "120",
		commission_win: "0.75",
		commission_loss: "0.50",
		active: false,
	},
	{
		id: uuidv4(),
		account_label: "pcx600904(bet964)",
		agent: "Bet964",
		account_name: "pcx600904",
		currency: "CAD",
		effective_stake: "180",
		commission_win: "0.90",
		commission_loss: "0.60",
		active: true,
	},
	{
		id: uuidv4(),
		account_label: "pcx600905(bet965)",
		agent: "Bet965",
		account_name: "pcx600905",
		currency: "JPY",
		effective_stake: "220",
		commission_win: "1.10",
		commission_loss: "0.80",
		active: false,
	},
	{
		id: uuidv4(),
		account_label: "pcx600906(bet966)",
		agent: "Bet966",
		account_name: "pcx600906",
		currency: "CHF",
		effective_stake: "130",
		commission_win: "0.80",
		commission_loss: "0.55",
		active: false,
	},
	{
		id: uuidv4(),
		account_label: "pcx600907(bet967)",
		agent: "Bet967",
		account_name: "pcx600907",
		currency: "HKD",
		effective_stake: "170",
		commission_win: "0.85",
		commission_loss: "0.65",
		active: true,
	},
	{
		id: uuidv4(),
		account_label: "pcx600908(bet968)",
		agent: "Bet968",
		account_name: "pcx600908",
		currency: "SGD",
		effective_stake: "190",
		commission_win: "0.95",
		commission_loss: "0.70",
		active: false,
	},
	{
		id: uuidv4(),
		account_label: "pcx600909(bet969)",
		agent: "Bet969",
		account_name: "pcx600909",
		currency: "SEK",
		effective_stake: "240",
		commission_win: "1.20",
		commission_loss: "0.90",
		active: true,
	},
	{
		id: uuidv4(),
		account_label: "pcx600909(bet969)",
		agent: "Bet969",
		account_name: "pcx600909",
		currency: "SEK",
		effective_stake: "240",
		commission_win: "1.20",
		commission_loss: "0.90",
		active: true,
	},
	{
		id: uuidv4(),
		account_label: "pcx600909(bet969)",
		agent: "Bet969",
		account_name: "pcx600909",
		currency: "SEK",
		effective_stake: "240",
		commission_win: "1.20",
		commission_loss: "0.90",
		active: true,
	},
	{
		id: uuidv4(),
		account_label: "pcx600909(bet969)",
		agent: "Bet969",
		account_name: "pcx600909",
		currency: "SEK",
		effective_stake: "240",
		commission_win: "1.20",
		commission_loss: "0.90",
		active: true,
	},
	{
		id: uuidv4(),
		account_label: "pcx600909(bet969)",
		agent: "Bet969",
		account_name: "pcx600909",
		currency: "SEK",
		effective_stake: "240",
		commission_win: "1.20",
		commission_loss: "0.90",
		active: true,
	},
	{
		id: uuidv4(),
		account_label: "pcx600909(bet969)",
		agent: "Bet969",
		account_name: "pcx600909",
		currency: "SEK",
		effective_stake: "240",
		commission_win: "1.20",
		commission_loss: "0.90",
		active: true,
	},
];

export const customerHeaderData = [
	"Customer Name",
	"Chat Id",
	"Chat Source",
	"Chat Name",
	"Account Id",
	"Commission Win",
	"Commission Loss",
	"Win Shave",
	"Lose Shave",
	"Active",
	"Action",
];

export const customerRowData = [
	{
		id: uuidv4(),
		customer_name: "Jane Smith",
		chat_id: "1234",
		chat_source: "Mobile App",
		chat_name: "Chat 2",
		account_id: "account456",
		commission_win: "3.00",
		commission_loss: "1.50",
		win_shave: "6",
		lose_shave: "4",
		active: false,
	},
	{
		id: uuidv4(),
		customer_name: "David Johnson",
		chat_id: "1234",
		chat_source: "Website",
		chat_name: "Chat 3",
		account_id: "account789",
		commission_win: "2.75",
		commission_loss: "1.35",
		win_shave: "5.5",
		lose_shave: "3.5",
		active: true,
	},
	{
		id: uuidv4(),
		customer_name: "Emily Brown",
		chat_id: "1234",
		chat_source: "Mobile App",
		chat_name: "Chat 4",
		account_id: "account101112",
		commission_win: "2.85",
		commission_loss: "1.45",
		win_shave: "5.7",
		lose_shave: "3.7",
		active: false,
	},
	{
		id: uuidv4(),
		customer_name: "Michael Wilson",
		chat_id: "1234",
		chat_source: "Website",
		chat_name: "Chat 5",
		account_id: "account131415",
		commission_win: "2.60",
		commission_loss: "1.30",
		win_shave: "5.2",
		lose_shave: "3.2",
		active: false,
	},
	{
		id: uuidv4(),
		customer_name: "Jennifer Garcia",
		chat_id: "1234",
		chat_source: "Mobile App",
		chat_name: "Chat 6",
		account_id: "account161718",
		commission_win: "2.90",
		commission_loss: "1.40",
		win_shave: "5.8",
		lose_shave: "3.8",
		active: true,
	},
	{
		id: uuidv4(),
		customer_name: "William Martinez",
		chat_id: "1234",
		chat_source: "Website",
		chat_name: "Chat 7",
		account_id: "account192021",
		commission_win: "3.10",
		commission_loss: "1.60",
		win_shave: "6.2",
		lose_shave: "4.2",
		active: false,
	},
	{
		id: uuidv4(),
		customer_name: "Linda Robinson",
		chat_id: "1234",
		chat_source: "Mobile App",
		chat_name: "Chat 8",
		account_id: "account222324",
		commission_win: "2.80",
		commission_loss: "1.50",
		win_shave: "5.6",
		lose_shave: "3.6",
		active: false,
	},
	{
		id: uuidv4(),
		customer_name: "Thomas Clark",
		chat_id: "1234",
		chat_source: "Website",
		chat_name: "Chat 9",
		account_id: "account252627",
		commission_win: "2.70",
		commission_loss: "1.40",
		win_shave: "5.4",
		lose_shave: "3.4",
		active: true,
	},
	{
		id: uuidv4(),
		customer_name: "Mary Hall",
		chat_id: "1234",
		chat_source: "Mobile App",
		chat_name: "Chat 10",
		account_id: "account282930",
		commission_win: "3.20",
		commission_loss: "1.70",
		win_shave: "6.4",
		lose_shave: "4.4",
		active: false,
	},
	{
		id: uuidv4(),
		customer_name: "Christopher King",
		chat_id: "1234",
		chat_source: "Website",
		chat_name: "Chat 11",
		account_id: "account313233",
		commission_win: "3.05",
		commission_loss: "1.55",
		win_shave: "6.1",
		lose_shave: "4.1",
		active: false,
	},
	{
		id: uuidv4(),
		customer_name: "Patricia Lee",
		chat_id: "1234",
		chat_source: "Mobile App",
		chat_name: "Chat 12",
		account_id: "account343536",
		commission_win: "3.15",
		commission_loss: "1.65",
		win_shave: "6.3",
		lose_shave: "4.3",
		active: true,
	},
	{
		id: uuidv4(),
		customer_name: "Robert Adams",
		chat_id: "1234",
		chat_source: "Website",
		chat_name: "Chat 13",
		account_id: "account373839",
		commission_win: "2.95",
		commission_loss: "1.45",
		win_shave: "5.9",
		lose_shave: "3.9",
		active: false,
	},
	{
		id: uuidv4(),
		customer_name: "Barbara White",
		chat_id: "1234",
		chat_source: "Mobile App",
		chat_name: "Chat 14",
		account_id: "account404142",
		commission_win: "3.25",
		commission_loss: "1.75",
		win_shave: "6.5",
		lose_shave: "4.5",
		active: false,
	},
	{
		id: uuidv4(),
		customer_name: "Daniel Garcia",
		chat_id: "1234",
		chat_source: "Website",
		chat_name: "Chat 15",
		account_id: "account434445",
		commission_win: "3.30",
		commission_loss: "1.80",
		win_shave: "6.6",
		lose_shave: "4.6",
		active: true,
	},
];

export const marketList = [
	{ id: 1, name: "Win", value: "win" },
	{ id: 2, name: "T5", value: "t5" },
	{ id: 3, name: "T10", value: "t10" },
	{ id: 4, name: "T20", value: "t20" },
];

export const exchangeHeaderData = ["Currency Name", "Date", "Exchange Rate"];

export const exchangeRowData = [
	{
		id: uuidv4(),
		currency_name: "USD",
		date: "10/15/2024",
		exchange_rate: 1.1,
	},
	{
		id: uuidv4(),
		currency_name: "EUR",
		date: "09/30/2024",
		exchange_rate: 0.9,
	},
	{
		id: uuidv4(),
		currency_name: "GBP",
		date: "08/20/2024",
		exchange_rate: 0.75,
	},
	{
		id: uuidv4(),
		currency_name: "JPY",
		date: "07/25/2024",
		exchange_rate: 110.5,
	},
	{
		id: uuidv4(),
		currency_name: "AUD",
		date: "06/10/2024",
		exchange_rate: 1.35,
	},
	{
		id: uuidv4(),
		currency_name: "CAD",
		date: "05/18/2024",
		exchange_rate: 1.2,
	},
	{
		id: uuidv4(),
		currency_name: "CHF",
		date: "04/14/2024",
		exchange_rate: 1.05,
	},
	{
		id: uuidv4(),
		currency_name: "CNY",
		date: "03/22/2024",
		exchange_rate: 6.45,
	},
	{
		id: uuidv4(),
		currency_name: "INR",
		date: "02/19/2024",
		exchange_rate: 74.3,
	},
	{
		id: uuidv4(),
		currency_name: "BRL",
		date: "01/30/2024",
		exchange_rate: 5.4,
	},
	{
		id: uuidv4(),
		currency_name: "ZAR",
		date: "12/05/2024",
		exchange_rate: 14.7,
	},
	{
		id: uuidv4(),
		currency_name: "MXN",
		date: "11/11/2024",
		exchange_rate: 20.25,
	},
	{
		id: uuidv4(),
		currency_name: "RUB",
		date: "10/02/2024",
		exchange_rate: 75.0,
	},
	{
		id: uuidv4(),
		currency_name: "KRW",
		date: "09/18/2024",
		exchange_rate: 1200.8,
	},
];

export const currencyHeaderData = ["Currency Name", "Action"];

export const currencyRowData = [
	{ id: uuidv4(), currency_name: "EUR" },
	{ id: uuidv4(), currency_name: "JPY" },
	{ id: uuidv4(), currency_name: "GBP" },
	{ id: uuidv4(), currency_name: "AUD" },
	{ id: uuidv4(), currency_name: "CAD" },
	{ id: uuidv4(), currency_name: "CHF" },
	{ id: uuidv4(), currency_name: "CNY" },
	{ id: uuidv4(), currency_name: "INR" },
	{ id: uuidv4(), currency_name: "BRL" },
	{ id: uuidv4(), currency_name: "ZAR" },
	{ id: uuidv4(), currency_name: "MXN" },
	{ id: uuidv4(), currency_name: "RUB" },
	{ id: uuidv4(), currency_name: "KRW" },
];

export const relatedAccountData = [
	{
		agent: "bet961",
		accounts: [
			{
				id: uuidv4(),
				account_label: "pcx600901(bet961)",
				agent: "bet961",
				account_name: "pcx600901",
				currency: "EUR",
				effective_stake: "150",
				commission_win: "0.50",
				commission_loss: "0.25",
				active: true,
			},
			{
				id: uuidv4(),
				account_label: "pcx600902(bet961)",
				agent: "bet961",
				account_name: "pcx600902",
				currency: "GBP",
				effective_stake: "200",
				commission_win: "1.00",
				commission_loss: "0.75",
				active: false,
			},
		],
	},
	{
		agent: "betSafe",
		accounts: [
			{
				id: uuidv4(),
				account_label: "bsf700101(betSafe)",
				agent: "betSafe",
				account_name: "bsf700101",
				currency: "USD",
				effective_stake: "300",
				commission_win: "0.75",
				commission_loss: "0.50",
				active: true,
			},
			{
				id: uuidv4(),
				account_label: "bsf700102(betSafe)",
				agent: "betSafe",
				account_name: "bsf700102",
				currency: "CAD",
				effective_stake: "250",
				commission_win: "0.60",
				commission_loss: "0.40",
				active: false,
			},
		],
	},
	{
		agent: "superBet",
		accounts: [
			{
				id: uuidv4(),
				account_label: "sbt800201(superBet)",
				agent: "superBet",
				account_name: "sbt800201",
				currency: "AUD",
				effective_stake: "350",
				commission_win: "0.80",
				commission_loss: "0.60",
				active: true,
			},
			{
				id: uuidv4(),
				account_label: "sbt800202(superBet)",
				agent: "superBet",
				account_name: "sbt800202",
				currency: "NZD",
				effective_stake: "400",
				commission_win: "1.20",
				commission_loss: "1.00",
				active: false,
			},
		],
	},
	{
		agent: "winBig",
		accounts: [
			{
				id: uuidv4(),
				account_label: "wbg900301(winBig)",
				agent: "winBig",
				account_name: "wbg900301",
				currency: "EUR",
				effective_stake: "500",
				commission_win: "1.50",
				commission_loss: "1.25",
				active: true,
			},
			{
				id: uuidv4(),
				account_label: "wbg900302(winBig)",
				agent: "winBig",
				account_name: "wbg900302",
				currency: "GBP",
				effective_stake: "450",
				commission_win: "1.40",
				commission_loss: "1.10",
				active: false,
			},
		],
	},
];

export const relatedAccountHeaderData = [
	"Agent",
	"Account Name",
	"Currency",
	"Effective Stake",
	"Commission Win",
	"Commission Loss",
];

export const relatedAccountData2 = [
	{
		id: uuidv4(),
		agent: "superBet",
		account_name: "sbt800201",
		currency: "AUD",
		effective_stake: "350",
		commission_win: "0.80",
		commission_loss: "0.60",
	},
	{
		id: uuidv4(),
		account_label: "sbt800202(superBet)",
		agent: "superBet",
		account_name: "sbt800202",
		currency: "NZD",
		effective_stake: "400",
		commission_win: "1.20",
		commission_loss: "1.00",
	},
];

export const betList = [
	{
		position: 1,
		bet_status: "",
		player_name: "Grayson Murray",
		total: -17,
		round1: 69,
		round2: 63,
		round3: 64,
		round4: 67,
		stake: 263,
	},
	{
		position: "T2",
		bet_status: "",
		player_name: "Byeong Hun An",
		total: -17,
		round1: 67,
		round2: 64,
		round3: 68,
		round4: 64,
		stake: 263,
	},
	{
		position: "T2",
		bet_status: "To win @3.2 Risk $2000",
		player_name: "Keegan Bradley",
		total: -17,
		round1: 67,
		round2: 66,
		round3: 63,
		round4: 67,
		stake: 263,
	},
	{
		position: "T4",
		bet_status: "",
		player_name: "Carl Yuan",
		total: -16,
		round1: 66,
		round2: 65,
		round3: 70,
		round4: 63,
		stake: 264,
	},
	{
		position: "T4",
		bet_status: "",
		player_name: "Russell Henley",
		total: -16,
		round1: 69,
		round2: 66,
		round3: 66,
		round4: 63,
		stake: 264,
	},
	{
		position: 6,
		bet_status: "To win @31 Risk $880",
		player_name: "J.T. Poston",
		total: -15,
		round1: 68,
		round2: 66,
		round3: 67,
		round4: 65,
		stake: 266,
	},
	{
		position: "T7",
		bet_status: "To Finish Top 20 @5.3 Risk $22",
		player_name: "Nick Taylor",
		total: -14,
		round1: 69,
		round2: 67,
		round3: 65,
		round4: 65,
		stake: 266,
	},
	{
		position: "T7",
		bet_status: "",
		player_name: "Emiliano Grillo",
		total: -14,
		round1: 71,
		round2: 66,
		round3: 63,
		round4: 66,
		stake: 266,
	},
	{
		position: "T7",
		bet_status: "",
		player_name: "Matthieu Pavon",
		total: -14,
		round1: 70,
		round2: 65,
		round3: 66,
		round4: 65,
		stake: 266,
	},
	{
		position: "T30",
		bet_status: "",
		player_name: "Hideki Matsuyama",
		total: -13,
		round1: 70,
		round2: 68,
		round3: 67,
		round4: 66,
		stake: 267,
	},
	{
		position: "T10",
		bet_status: "",
		player_name: "Andrew Putnam",
		total: -13,
		round1: 70,
		round2: 65,
		round3: 67,
		round4: 66,
		stake: 267,
	},
	{
		position: "T10",
		bet_status: "",
		player_name: "Harris English",
		total: -13,
		round1: 71,
		round2: 66,
		round3: 63,
		round4: 67,
		stake: 267,
	},
	{
		position: "T10",
		bet_status: "To Finish Top 20 @7.2 Risk 46.2",
		player_name: "Taylor Pendrith",
		total: -13,
		round1: 69,
		round2: 67,
		round3: 66,
		round4: 65,
		stake: 267,
	},
	{
		position: "T13",
		bet_status: "To Win @3.7 Risk $880",
		player_name: "Eric Cole",
		total: -12,
		round1: 70,
		round2: 65,
		round3: 67,
		round4: 66,
		stake: 268,
	},

	{
		position: "T18",
		bet_status: "To win @25.6 Risk $880",
		player_name: "Chris Kirk",
		total: -11,
		round1: 69,
		round2: 67,
		round3: 66,
		round4: 67,
		stake: 269,
	},
];

export const betTrackList = [
	{
		player: "John",
		stake: 50,
		odds: 2.5,
		profit: 75,
		average: 50,
	},
	{
		player: "Sarah",
		stake: 100,
		odds: 1.8,
		profit: 80,
		average: 90,
	},
	{
		player: "David",
		stake: 25,
		odds: 3.0,
		profit: 50,
		average: 58.33,
	},
	{
		player: "Emily",
		stake: 75,
		odds: 2.2,
		profit: 82.5,
		average: 77.5,
	},
	{
		player: "Michael",
		stake: 50,
		odds: 1.5,
		profit: 25,
		average: 66.25,
	},
	{
		player: "Lisa",
		stake: 150,
		odds: 2.0,
		profit: 150,
		average: 100,
	},
	{
		player: "James",
		stake: 200,
		odds: 1.3,
		profit: 60,
		average: 107.14,
	},
	{
		player: "Emma",
		stake: 50,
		odds: 2.8,
		profit: 110,
		average: 102.86,
	},
	{
		player: "Alex",
		stake: 100,
		odds: 1.6,
		profit: 60,
		average: 100,
	},
	{
		player: "Olivia",
		stake: 75,
		odds: 2.5,
		profit: 112.5,
		average: 101.5,
	},
	{
		player: "Daniel",
		stake: 30,
		odds: 4.0,
		profit: 90,
		average: 103.64,
	},
	{
		player: "Alex",
		stake: 100,
		odds: 1.6,
		profit: 60,
		average: 100,
	},
	{
		player: "Olivia",
		stake: 75,
		odds: 2.5,
		profit: 112.5,
		average: 101.5,
	},
	{
		player: "Daniel",
		stake: 30,
		odds: 4.0,
		profit: 90,
		average: 103.64,
	},

	{
		player: "Daniel",
		stake: 30,
		odds: 4.0,
		profit: 90,
		average: 103.64,
	},
];
export const betTrackHeaderData = [
	"Player Name",
	"Stake",
	"Odds",
	"profit",
	"average",
];