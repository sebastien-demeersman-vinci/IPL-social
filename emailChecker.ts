export class EmailChecker {
    check(email: string): boolean {
        if (!email.includes("@"))
            return false;
        if (email.charAt(0) === '@')
            return false;
        return true;
    }
}