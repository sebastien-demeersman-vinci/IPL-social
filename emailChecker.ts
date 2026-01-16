export class EmailChecker {
    check(email: string): boolean {
        if (!this.containsAt(email))
            return false;
        if (email.charAt(0) === '@')
            return false;
        if (email.charAt(email.length-1) === '@')
            return false;
        if (email.includes(" "))
            return false;
        return true;
    }

    private containsAt(email: string): boolean {
        return email.includes("@");
    }
}