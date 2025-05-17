import FormInput from "@components/Form/InputText/FormInput";
import ROUTES from "@constants/routes";
import { authSilce } from "@redux/slice/authSilce";
import { apiLogin } from "@service/api.service";
import { rules } from "@utils/rules";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router";

export interface UserLogin {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,

    setError,

    formState: { errors },
  } = useForm<UserLogin>({
    mode: "onChange",
  });

  // const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data: UserLogin) => {
    const res = await apiLogin(data, setError);
    if (res) {
      const { token, user } = res;
      dispatch(authSilce.actions.login({ accessToken: token, user }));
      // You can use res.token and res.user here
      // navigate("/");
    }
  });

  return (
    <div className="ml-auto h-[500px] bg-white p-8 lg:mr-40 lg:w-[400px]">
      <div className="hidden pb-2 lg:block lg:text-2xl">Đăng nhập</div>
      <form onSubmit={onSubmit}>
        <FormInput
          type="text"
          placeholder="Email"
          register={register("email", {
            ...rules.required("email"),
            ...rules.mustEmail(),
          })}
          error={errors.email}
        />

        <FormInput
          type="password"
          placeholder="Mật khẩu"
          register={register("password", {
            ...rules.required("mật khẩu"),
          })}
          error={errors.password} // React hook form -> liệu react hook form có hỗ trợ setError ?
        />

        <div>
          <button className="curshadow mt-7 w-full cursor-pointer rounded bg-[#EE4D2D] p-2 hover:bg-orange-500">
            Đăng nhập
          </button>
          <div className="mt-2 text-center lg:text-start">Quên mật khẩu ?</div>
        </div>
        <div className="divider">
          <span>HOẶC</span>
        </div>
      </form>
      <div className="gap-3 lg:flex">
        <button className="mt-7 flex w-full cursor-pointer justify-center rounded border p-1">
          <svg
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="24"
          >
            <path
              fill="#74C0FC"
              d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
            />
          </svg>
          <span> Facebook</span>
        </button>
        <button className="mt-7 flex w-full cursor-pointer justify-center rounded border p-1">
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="google"
            width={22}
            height={22}
            className="mr-2"
          />
          <span>Google</span>
        </button>
      </div>
      <div className="mt-2 lg:mt-5 lg:text-center">
        Bạn mới biết đến Shopee?{" "}
        <Link to={ROUTES.REGISTER} className="cursor-pointer text-[#EE4D2D]">
          Đăng ký
        </Link>
      </div>
    </div>
  );
};

export default Login;
