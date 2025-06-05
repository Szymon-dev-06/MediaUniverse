import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

type UserContextType = {
	userName: string;
	setUserName: (name:string) => void
}

export const UserContext = createContext<UserContextType | null>(null)

export function UserProvider({ children }: { children: ReactNode }) {
	const [userName, setUserName] = useState<string>(() => {
		return sessionStorage.getItem('userName') || ''
	});

	return (
		<UserContext.Provider value={{ userName, setUserName }}>
			{children}
		</UserContext.Provider>
	);
}

export function useUser() {
	const context = useContext(UserContext);
	if (!context) throw new Error("useUser must be used within a UserProvider");
	return context;
}