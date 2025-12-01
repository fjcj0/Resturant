import FullScreenTsx from "../../../tools/Screens/FullScreen";
import FloatInput from "../../../ui/inputs/FloatInput";
import { useState } from "react";
import Animation from "../../../ui/transition/Animation";
import UserAnimation from '../../../animations/UserAimation.json';
import Button from "../../../ui/buttons/Button";
import { Link } from "react-router-dom";
const UserCreateAccountPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorName, setErrorName] = useState('');
    return (
        <FullScreenTsx>
            <div className="max-w-5xl w-full m-3 bg-bg-color rounded-lg grid grid-cols-1 md:grid-cols-2">
                <div className="w-full flex-center flex-col gap-3 p-3">
                    <h1 className="font-bold text-3xl">انشاء الحساب للمستخدم</h1>
                    <Animation animation={UserAnimation} width={300} height={300} />
                </div>
                <div className="w-full p-6 flex flex-col items-center justify-center">
                    <div className="w-full items-start justify-start space-y-4">
                        <FloatInput
                            value={name}
                            setValue={setName}
                            isPassword={false}
                            label="ادخل الاسم من فضلك"
                            type="text"
                            error={errorName}
                            headText={"الاسم"} />
                        <FloatInput
                            value={email}
                            setValue={setEmail}
                            isPassword={false}
                            label="ادخل الايميل من فضلك"
                            type="email"
                            error={errorEmail}
                            headText={"الايميل"}
                        />
                        <FloatInput
                            value={password}
                            setValue={setPassword}
                            isPassword={true}
                            label="ادخل الباسورد من فضلك"
                            type="password"
                            error={errorPassword}
                            headText={"الباسورد"}
                        />
                    </div>
                    <div className="w-full my-2">
                        <Button title="تسجيل الدخول" isLoading={false} onPress={() => console.log('hello')} />
                    </div>
                    <div className="flex-start w-full px-3">
                        <p>لديك حساب؟ <Link to={'/auth/user/login'} className="text-primary">
                            سجل دخول
                        </Link></p>
                    </div>
                </div>
            </div>
        </FullScreenTsx >
    );
}
export default UserCreateAccountPage;