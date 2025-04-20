export interface Credentials {
    email: string;
    username: string;
    password: string;
}
export interface User {
    first_name: string;
    last_name: string;
    phone_number: string;
    username?: string;
    email: string;
    password: string;
    isLoggedIn: boolean;
}
export interface ApiResponse {
    success: boolean;
    message?: string;
    data?: any;
    errorMessage?: string;
}
export interface AuthState {
    user: User | null;
    loading: boolean;
    error: string | null;
}
export interface LoginViewProps {
    credentials: Credentials;
    loading: boolean;
    onUsernameChange: (text: string) => void;
    onPasswordChange: (text: string) => void;
    onEmailChange: (text: string) => void;
    onLoginPress: () => void;
    onLogoutPress: () => void;
    onRegisterPress: () => void;
}
export interface RegisterViewProps {
    user: User;
    loading: boolean;
    onFnameChange: (text: string) => void;
    onLnameChange: (text: string) => void;
    onEmailChange: (text: string) => void;
    onPasswordChange: (text: string) => void;
    onPnumberChange: (text: string) => void;
    onRegisterChange: () => void;
}
