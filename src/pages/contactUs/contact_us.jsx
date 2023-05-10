import React from "react";
import "./icon-font.min.css";
import "../../Styling/contact.css";
import { useForm } from "react-hook-form";
import background from "../../imported/images/image4.jpg";
import mailIcon from "../../imported/images/icons/icon-email.png";
import phoneIcon from "../../imported/images/icons/icons8-phone-22.png";
import profileIcon from "../../imported/images/icons/icons8-administrator-male-22.png";
import { RepoCreateContact } from "../../repositories/contact.repo";
import LoadingComponent from "../../components/loading_component/loading_component";
import { useLang } from '../../custom_hooks/use_get_current_language';

const Contact_us = () => {
	const {translate} = useLang();
	const { mutate, isLoading } = RepoCreateContact()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const handleRegistration = (data) => {
		mutate(data)
		reset();
	};

	const registerOptions = {
		name: {
			required: "Name is required",
			minLength: {
				value: 3,
				message: "Name must have at least 3 characters",
			},
			maxLength: {
				value: 20,
				message: "Name Max length 20 characters",
			},
			pattern: {
				value: /^[a-zA-Z]+(([_\][a-zA-Z ])?[a-zA-Z]*)*$/,
				message: "Accept _ and space",
			},
		},
		email: {
			required: "Email is required",
			pattern: {
				value:
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				message: "Enter Valid Email",
			},
		},
		phone: {
			required: "Phone is required",
			pattern: {
				value: /^01[0-9]{9}$/,
				message: "Enter Valid Phone Number",
			},
		},
		subject: {
			required: "Subject is required",
			minLength: {
				value: 3,
				message: "Message must have at least 3 characters",
			},
			maxLength: {
				value: 250,
				message: "Message Max length 30 characters",
			},
		},
		message: {
			required: "Message is required",
			minLength: {
				value: 5,
				message: "Message must have at least 5 characters",
			},
			maxLength: {
				value: 250,
				message: "Message Max length 250 characters",
			},
		},
	};
	return (
		<>
			<section
				className="bg-img1 txt-center p-lr-15 p-tb-92 contact__bk d-flex justify-content-center align-items-center"
				style={{ backgroundImage: "url(" + background + ")", height: "40vh" }}
			>
				<h2 className="ltext-105 cl0 txt-center mt-lg-5 RobotoFont"> {translate("contact_title")} </h2>
			</section>

			<section className="bg0 p-t-104 p-b-116">
				<div className="container">
					<div className="flex-w flex-tr">
						<div className="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
							<form onSubmit={handleSubmit(handleRegistration)}>
								<h4 className="mtext-105 cl2 txt-center p-b-30 RobotoFont">
									{translate("contact_SendUSTitle")}
									
								</h4>

								<div className="m-b-20">
									<div className="bor8 how-pos4-parent">
										<input
											className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30 RobotoFont"
											type="text"
											name="userName"
											placeholder={translate("contact_placeHolderName")}
											{...register("name", registerOptions.name)}
										/>
										<img
											className="how-pos4 pointer-none "
											src={profileIcon}
											alt="ICON"
										/>
									</div>
									<small className="text-danger fs-4 ">
										{errors?.name && errors.name.message}
									</small>
								</div>
								<div className="m-b-20">
									<div className="bor8 how-pos4-parent">
										<input
											className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30 RobotoFont"
											type="text"
											name="email"
											placeholder={translate("contact_placeHolderEmail")}
											{...register("email", registerOptions.email)}
										/>
										<img
											className="how-pos4 pointer-none"
											src={mailIcon}
											alt="ICON"
										/>
									</div>
									<small className="text-danger fs-4 ">
										{errors?.email && errors.email.message}
									</small>
								</div>

								<div className="m-b-20">
									<div className="bor8 how-pos4-parent">
										<input
											className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30 RobotoFont"
											type="text"
											name="mobile"
											placeholder={translate("contact_placeHolderPhone")}
											{...register("phone", registerOptions.phone)}
										/>
										<img
											className="how-pos4 pointer-none "
											src={phoneIcon}
											alt="ICON"
										/>
									</div>
									<small className="text-danger fs-4 ">
										{errors?.phone && errors.phone.message}
									</small>
								</div>

								<div className="m-b-30 RobotoFont">
									<div class="bor8 ">
										<textarea
											className="stext-111 cl2 plh3 size-120 p-lr-28 p-tb-25"
											name="msg"
											placeholder={translate("contact_placeHolderMsg")}
											{...register("message", registerOptions.message)}
										></textarea>
									</div>
									<small className="text-danger fs-4">
										{errors?.message && errors.message.message}
									</small>
								</div>

								<button className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer RobotoFont">
									{isLoading == true ? <LoadingComponent />: translate("contact_placeHolderbtn") } 
								</button>
							</form>
						</div>

						<div className="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md">
							<div className="flex-w w-full p-b-42">
								<span className="fs-18 cl5 txt-center size-211">
									<span className="lnr lnr-map-marker"></span>
								</span>

								<div class="size-212 p-t-2">
									<span class="mtext-110 cl2 RobotoFont"> {translate("contact_infoAddress")} </span>

									<p class="stext-115 cl6 size-213 p-t-18 RobotoFont">
										{translate("contact_infoAddressBody")}
									</p>
								</div>
							</div>

							<div class="flex-w w-full p-b-42">
								<span class="fs-18 cl5 txt-center size-211">
									<span class="lnr lnr-phone-handset"></span>
								</span>

								<div class="size-212 p-t-2">
									<span class="mtext-110 cl2 RobotoFont">{translate("contact_infotalk")}</span>

									<p class="stext-115 cl1 size-213 p-t-18 RobotoFont"> {translate("contact_infotalkBody")} </p>
								</div>
							</div>

							<div class="flex-w w-full">
								<span class="fs-18 cl5 txt-center size-211">
									<span class="lnr lnr-envelope"></span>
								</span>

								<div class="size-212 p-t-2">
									<span class="mtext-110 cl2 RobotoFont"> {translate("contact_infoSale")} </span>

									<p class="stext-115 cl1 size-213 p-t-18 RobotoFont">
										{translate("contact_infoSaleBody")}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact_us;
