import React, { useState } from "react";

const ExchangeInput = () => {
	const [isOpenBaseCurrency, setIsOpenBaseCurrency] = useState(false);
	const [selectedBaseCurrencyCode, setSelectedBaseCurrencyCode] =
		useState("USD");
	const [isOpenConvertCurrency, setIsOpenConvertCurrency] = useState(false);
	const [selectedConvertCurrencyCode, setSelectedConvertCurrencyCode] =
		useState("EUR");

	return (
		<>
			<form class="max-w-xl mx-auto">
				<div class="space-x-0 space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse flex items-center flex-col sm:flex-row mb-4">
					<div class="flex relative">
						<label
							for="fiat-currency-input"
							class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
						>
							Your Email
						</label>
						<div class="relative w-full">
							<input
								type="number"
								id="fiat-currency-input"
								class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
								placeholder={`421 ${selectedBaseCurrencyCode}`}
								required
							/>
						</div>
						<button
							onClick={() => setIsOpenBaseCurrency(!isOpenBaseCurrency)}
							id="dropdown-fiat-currency-button"
							data-dropdown-toggle="dropdown-fiat-currency"
							class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
							type="button"
						>
							<svg
								fill="none"
								aria-hidden="true"
								class="h-4 w-4 me-2"
								viewBox="0 0 20 15"
							>
								<rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
								<mask
									id="a"
									style={{ maskType: "luminance" }}
									width="20"
									height="15"
									x="0"
									y="0"
									maskUnits="userSpaceOnUse"
								>
									<rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
								</mask>
								<g mask="url(#a)">
									<path
										fill="#D02F44"
										fill-rule="evenodd"
										d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
										clip-rule="evenodd"
									/>
									<path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
									<g filter="url(#filter0_d_343_121520)">
										<path
											fill="url(#paint0_linear_343_121520)"
											fill-rule="evenodd"
											d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
											clip-rule="evenodd"
										/>
									</g>
								</g>
								<defs>
									<linearGradient
										id="paint0_linear_343_121520"
										x1=".933"
										x2=".933"
										y1="1.433"
										y2="6.1"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="#fff" />
										<stop offset="1" stop-color="#F0F0F0" />
									</linearGradient>
									<filter
										id="filter0_d_343_121520"
										width="6.533"
										height="5.667"
										x=".933"
										y="1.433"
										color-interpolation-filters="sRGB"
										filterUnits="userSpaceOnUse"
									>
										<feFlood flood-opacity="0" result="BackgroundImageFix" />
										<feColorMatrix
											in="SourceAlpha"
											result="hardAlpha"
											values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										/>
										<feOffset dy="1" />
										<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
										<feBlend
											in2="BackgroundImageFix"
											result="effect1_dropShadow_343_121520"
										/>
										<feBlend
											in="SourceGraphic"
											in2="effect1_dropShadow_343_121520"
											result="shape"
										/>
									</filter>
								</defs>
							</svg>
							{selectedBaseCurrencyCode}
							<svg
								class="w-2.5 h-2.5 ms-2.5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 10 6"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m1 1 4 4 4-4"
								/>
							</svg>
						</button>
						<div
							id="dropdown-fiat-currency"
							className={`z-50 absolute -right-9    top-11 ${isOpenBaseCurrency ? "block" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700`}
						>
							<ul
								onClick={(e) => setSelectedBaseCurrencyCode(e.target.innerText)}
								class="py-2 text-sm text-gray-700 dark:text-gray-200"
								aria-labelledby="dropdown-fiat-currency-button"
							>
								<li>
									<button
										type="button"
										class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
										role="menuitem"
									>
										<div class="inline-flex items-center">
											<svg
												fill="none"
												aria-hidden="true"
												class="h-4 w-4 me-2"
												viewBox="0 0 20 15"
											>
												<rect
													width="19.6"
													height="14"
													y=".5"
													fill="#fff"
													rx="2"
												/>
												<mask
													id="a"
													style={{ maskType: "luminance" }}
													width="20"
													height="15"
													x="0"
													y="0"
													maskUnits="userSpaceOnUse"
												>
													<rect
														width="19.6"
														height="14"
														y=".5"
														fill="#fff"
														rx="2"
													/>
												</mask>
												<g mask="url(#a)">
													<path
														fill="#D02F44"
														fill-rule="evenodd"
														d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
														clip-rule="evenodd"
													/>
													<path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
													<g filter="url(#filter0_d_343_121520)">
														<path
															fill="url(#paint0_linear_343_121520)"
															fill-rule="evenodd"
															d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
															clip-rule="evenodd"
														/>
													</g>
												</g>
												<defs>
													<linearGradient
														id="paint0_linear_343_121520"
														x1=".933"
														x2=".933"
														y1="1.433"
														y2="6.1"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#fff" />
														<stop offset="1" stop-color="#F0F0F0" />
													</linearGradient>
													<filter
														id="filter0_d_343_121520"
														width="6.533"
														height="5.667"
														x=".933"
														y="1.433"
														color-interpolation-filters="sRGB"
														filterUnits="userSpaceOnUse"
													>
														<feFlood
															flood-opacity="0"
															result="BackgroundImageFix"
														/>
														<feColorMatrix
															in="SourceAlpha"
															result="hardAlpha"
															values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
														/>
														<feOffset dy="1" />
														<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
														<feBlend
															in2="BackgroundImageFix"
															result="effect1_dropShadow_343_121520"
														/>
														<feBlend
															in="SourceGraphic"
															in2="effect1_dropShadow_343_121520"
															result="shape"
														/>
													</filter>
												</defs>
											</svg>
											USD
										</div>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
										role="menuitem"
									>
										<div class="inline-flex items-center">
											<svg
												fill="none"
												aria-hidden="true"
												class="h-4 w-4 me-2"
												viewBox="0 0 20 15"
											>
												<rect
													width="19.6"
													height="14"
													y=".5"
													fill="#fff"
													rx="2"
												/>
												<mask
													id="a"
													style={{ maskType: "luminance" }}
													width="20"
													height="15"
													x="0"
													y="0"
													maskUnits="userSpaceOnUse"
												>
													<rect
														width="19.6"
														height="14"
														y=".5"
														fill="#fff"
														rx="2"
													/>
												</mask>
												<g mask="url(#a)">
													<path fill="#043CAE" d="M0 .5h19.6v14H0z" />
													<path
														fill="#FFD429"
														fill-rule="evenodd"
														d="M9.14 3.493L9.8 3.3l.66.193-.193-.66.193-.66-.66.194-.66-.194.193.66-.193.66zm0 9.334l.66-.194.66.194-.193-.66.193-.66-.66.193-.66-.193.193.66-.193.66zm5.327-4.86l-.66.193L14 7.5l-.193-.66.66.193.66-.193-.194.66.194.66-.66-.193zm-9.994.193l.66-.193.66.193L5.6 7.5l.193-.66-.66.193-.66-.193.194.66-.194.66zm9.369-2.527l-.66.194.193-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm-8.743 4.86l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.194.193.66-.193.66zm7.034-6.568l-.66.193.194-.66-.194-.66.66.194.66-.193-.193.66.193.66-.66-.194zm-5.326 8.276l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.193.193.66-.193.66zM13.84 10.3l-.66.193.194-.66-.194-.66.66.194.66-.194-.193.66.193.66-.66-.193zM5.1 5.827l.66-.194.66.194-.194-.66.194-.66-.66.193-.66-.193.193.66-.193.66zm7.034 6.181l-.66.193.194-.66-.194-.66.66.194.66-.193-.193.66.193.66-.66-.194zm-5.326-7.89l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.193.193.66-.193.66z"
														clip-rule="evenodd"
													/>
												</g>
											</svg>
											EUR
										</div>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
										role="menuitem"
									>
										<div class="inline-flex items-center">
											<svg
												fill="none"
												aria-hidden="true"
												class="h-4 w-4 me-2"
												viewBox="0 0 20 15"
											>
												<rect
													width="19.1"
													height="13.5"
													x=".25"
													y=".75"
													fill="#fff"
													stroke="#F5F5F5"
													stroke-width=".5"
													rx="1.75"
												/>
												<mask
													id="a"
													style={{ maskType: "luminance" }}
													width="20"
													height="15"
													x="0"
													y="0"
													maskUnits="userSpaceOnUse"
												>
													<rect
														width="19.1"
														height="13.5"
														x=".25"
														y=".75"
														fill="#fff"
														stroke="#fff"
														stroke-width=".5"
														rx="1.75"
													/>
												</mask>
												<g fill="#FF3131" mask="url(#a)">
													<path d="M14 .5h5.6v14H14z" />
													<path
														fill-rule="evenodd"
														d="M0 14.5h5.6V.5H0v14zM11.45 6.784a.307.307 0 01-.518-.277l.268-1.34-.933.466-.467-1.4-.467 1.4-.933-.466.268 1.34a.307.307 0 01-.518.277.307.307 0 00-.434 0l-.25.25-.933-.467L7 7.5l-.231.231a.333.333 0 000 .471l1.164 1.165h1.4l.234 1.4h.466l.234-1.4h1.4l1.164-1.165a.333.333 0 000-.471l-.231-.23.467-.934-.934.466-.25-.25a.307.307 0 00-.433 0z"
														clip-rule="evenodd"
													/>
												</g>
											</svg>
											CAD
										</div>
									</button>
								</li>
							</ul>
						</div>
					</div>
					<button
						type="button"
						class="p-3 text-sm font-medium text-gray-500 focus:outline-none bg-gray-100 rounded-lg hover:bg-gray-200 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
					>
						<svg
							class="w-4 h-4"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 16 14"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M11 10H1m0 0 3-3m-3 3 3 3m1-9h10m0 0-3 3m3-3-3-3"
							/>
						</svg>
						<span class="sr-only">Convert currency</span>
					</button>
					<div class="flex relative">
						<label
							for="fiat-currency-input"
							class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
						>
							Your Email
						</label>
						<div class="relative w-full">
							<input
								type="number"
								id="fiat-currency-input"
								class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
								placeholder={`421 ${selectedConvertCurrencyCode}`}
								required
							/>
						</div>
						<button
							onClick={() => setIsOpenConvertCurrency(!isOpenConvertCurrency)}
							id="dropdown-fiat-currency-button"
							data-dropdown-toggle="dropdown-fiat-currency"
							class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
							type="button"
						>
							<svg
								fill="none"
								aria-hidden="true"
								class="h-4 w-4 me-2"
								viewBox="0 0 20 15"
							>
								<rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
								<mask
									id="a"
									style={{ maskType: "luminance" }}
									width="20"
									height="15"
									x="0"
									y="0"
									maskUnits="userSpaceOnUse"
								>
									<rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
								</mask>
								<g mask="url(#a)">
									<path
										fill="#D02F44"
										fill-rule="evenodd"
										d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
										clip-rule="evenodd"
									/>
									<path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
									<g filter="url(#filter0_d_343_121520)">
										<path
											fill="url(#paint0_linear_343_121520)"
											fill-rule="evenodd"
											d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
											clip-rule="evenodd"
										/>
									</g>
								</g>
								<defs>
									<linearGradient
										id="paint0_linear_343_121520"
										x1=".933"
										x2=".933"
										y1="1.433"
										y2="6.1"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="#fff" />
										<stop offset="1" stop-color="#F0F0F0" />
									</linearGradient>
									<filter
										id="filter0_d_343_121520"
										width="6.533"
										height="5.667"
										x=".933"
										y="1.433"
										color-interpolation-filters="sRGB"
										filterUnits="userSpaceOnUse"
									>
										<feFlood flood-opacity="0" result="BackgroundImageFix" />
										<feColorMatrix
											in="SourceAlpha"
											result="hardAlpha"
											values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										/>
										<feOffset dy="1" />
										<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
										<feBlend
											in2="BackgroundImageFix"
											result="effect1_dropShadow_343_121520"
										/>
										<feBlend
											in="SourceGraphic"
											in2="effect1_dropShadow_343_121520"
											result="shape"
										/>
									</filter>
								</defs>
							</svg>
							{selectedConvertCurrencyCode}
							<svg
								class="w-2.5 h-2.5 ms-2.5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 10 6"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m1 1 4 4 4-4"
								/>
							</svg>
						</button>
						<div
							id="dropdown-fiat-currency"
							className={`z-50 absolute -right-9    top-11 ${isOpenConvertCurrency ? "block" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700`}
						>
							<ul
								onClick={(e) =>
									setSelectedConvertCurrencyCode(e.target.innerText)
								}
								class="py-2 text-sm text-gray-700 dark:text-gray-200"
								aria-labelledby="dropdown-fiat-currency-button"
							>
								<li>
									<button
										type="button"
										class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
										role="menuitem"
									>
										<div class="inline-flex items-center">
											<svg
												fill="none"
												aria-hidden="true"
												class="h-4 w-4 me-2"
												viewBox="0 0 20 15"
											>
												<rect
													width="19.6"
													height="14"
													y=".5"
													fill="#fff"
													rx="2"
												/>
												<mask
													id="a"
													style={{ maskType: "luminance" }}
													width="20"
													height="15"
													x="0"
													y="0"
													maskUnits="userSpaceOnUse"
												>
													<rect
														width="19.6"
														height="14"
														y=".5"
														fill="#fff"
														rx="2"
													/>
												</mask>
												<g mask="url(#a)">
													<path
														fill="#D02F44"
														fill-rule="evenodd"
														d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
														clip-rule="evenodd"
													/>
													<path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
													<g filter="url(#filter0_d_343_121520)">
														<path
															fill="url(#paint0_linear_343_121520)"
															fill-rule="evenodd"
															d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
															clip-rule="evenodd"
														/>
													</g>
												</g>
												<defs>
													<linearGradient
														id="paint0_linear_343_121520"
														x1=".933"
														x2=".933"
														y1="1.433"
														y2="6.1"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#fff" />
														<stop offset="1" stop-color="#F0F0F0" />
													</linearGradient>
													<filter
														id="filter0_d_343_121520"
														width="6.533"
														height="5.667"
														x=".933"
														y="1.433"
														color-interpolation-filters="sRGB"
														filterUnits="userSpaceOnUse"
													>
														<feFlood
															flood-opacity="0"
															result="BackgroundImageFix"
														/>
														<feColorMatrix
															in="SourceAlpha"
															result="hardAlpha"
															values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
														/>
														<feOffset dy="1" />
														<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
														<feBlend
															in2="BackgroundImageFix"
															result="effect1_dropShadow_343_121520"
														/>
														<feBlend
															in="SourceGraphic"
															in2="effect1_dropShadow_343_121520"
															result="shape"
														/>
													</filter>
												</defs>
											</svg>
											USD
										</div>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
										role="menuitem"
									>
										<div class="inline-flex items-center">
											<svg
												fill="none"
												aria-hidden="true"
												class="h-4 w-4 me-2"
												viewBox="0 0 20 15"
											>
												<rect
													width="19.6"
													height="14"
													y=".5"
													fill="#fff"
													rx="2"
												/>
												<mask
													id="a"
													style={{ maskType: "luminance" }}
													width="20"
													height="15"
													x="0"
													y="0"
													maskUnits="userSpaceOnUse"
												>
													<rect
														width="19.6"
														height="14"
														y=".5"
														fill="#fff"
														rx="2"
													/>
												</mask>
												<g mask="url(#a)">
													<path fill="#043CAE" d="M0 .5h19.6v14H0z" />
													<path
														fill="#FFD429"
														fill-rule="evenodd"
														d="M9.14 3.493L9.8 3.3l.66.193-.193-.66.193-.66-.66.194-.66-.194.193.66-.193.66zm0 9.334l.66-.194.66.194-.193-.66.193-.66-.66.193-.66-.193.193.66-.193.66zm5.327-4.86l-.66.193L14 7.5l-.193-.66.66.193.66-.193-.194.66.194.66-.66-.193zm-9.994.193l.66-.193.66.193L5.6 7.5l.193-.66-.66.193-.66-.193.194.66-.194.66zm9.369-2.527l-.66.194.193-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm-8.743 4.86l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.194.193.66-.193.66zm7.034-6.568l-.66.193.194-.66-.194-.66.66.194.66-.193-.193.66.193.66-.66-.194zm-5.326 8.276l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.193.193.66-.193.66zM13.84 10.3l-.66.193.194-.66-.194-.66.66.194.66-.194-.193.66.193.66-.66-.193zM5.1 5.827l.66-.194.66.194-.194-.66.194-.66-.66.193-.66-.193.193.66-.193.66zm7.034 6.181l-.66.193.194-.66-.194-.66.66.194.66-.193-.193.66.193.66-.66-.194zm-5.326-7.89l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.193.193.66-.193.66z"
														clip-rule="evenodd"
													/>
												</g>
											</svg>
											EUR
										</div>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
										role="menuitem"
									>
										<div class="inline-flex items-center">
											<svg
												fill="none"
												aria-hidden="true"
												class="h-4 w-4 me-2"
												viewBox="0 0 20 15"
											>
												<rect
													width="19.1"
													height="13.5"
													x=".25"
													y=".75"
													fill="#fff"
													stroke="#F5F5F5"
													stroke-width=".5"
													rx="1.75"
												/>
												<mask
													id="a"
													style={{ maskType: "luminance" }}
													width="20"
													height="15"
													x="0"
													y="0"
													maskUnits="userSpaceOnUse"
												>
													<rect
														width="19.1"
														height="13.5"
														x=".25"
														y=".75"
														fill="#fff"
														stroke="#fff"
														stroke-width=".5"
														rx="1.75"
													/>
												</mask>
												<g fill="#FF3131" mask="url(#a)">
													<path d="M14 .5h5.6v14H14z" />
													<path
														fill-rule="evenodd"
														d="M0 14.5h5.6V.5H0v14zM11.45 6.784a.307.307 0 01-.518-.277l.268-1.34-.933.466-.467-1.4-.467 1.4-.933-.466.268 1.34a.307.307 0 01-.518.277.307.307 0 00-.434 0l-.25.25-.933-.467L7 7.5l-.231.231a.333.333 0 000 .471l1.164 1.165h1.4l.234 1.4h.466l.234-1.4h1.4l1.164-1.165a.333.333 0 000-.471l-.231-.23.467-.934-.934.466-.25-.25a.307.307 0 00-.433 0z"
														clip-rule="evenodd"
													/>
												</g>
											</svg>
											CAD
										</div>
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="flex justify-between items-center flex-col sm:flex-row space-y-2 sm:space-y-0">
					<p class="text-sm text-gray-500 dark:text-gray-400">
						Last update: 20:45 AM, November 20, 2023
					</p>
					<button
						type="reset"
						class="text-sm text-blue-700 dark:text-blue-500 inline-flex items-center font-medium hover:underline"
					>
						Refresh{" "}
						<svg
							class="w-3 h-3 ms-1.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 18 20"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"
							/>
						</svg>
					</button>
				</div>
			</form>
		</>
	);
};

export default ExchangeInput;
