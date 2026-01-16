export class EmailChecker {
    check(email: string): boolean {
        if (!this.containsAt(email))
            return false;
        if (this.containsAtInFirstChar(email))
            return false;
        if (this.containsAtInLastChar(email))
            return false;
        if (this.containsSpace(email))
            return false;
        if (!this.containsPointAfterAt(email))
            return false;
        if (this.containsPointInLastChar(email))
            return false;
        return true;
    }

    private containsAt(email: string): boolean {
        return email.includes("@");
    }

    private containsAtInFirstChar(email: string): boolean {
        return email.charAt(0) === '@';
    }

    private containsAtInLastChar(email: string): boolean {
        return email.charAt(email.length-1) === '@';
    }

    private containsSpace(email: string): boolean {
        return email.includes(" ");
    }

    private containsPointAfterAt(email: string): boolean {
        const emailSplited = email.split("@");
        return emailSplited[1].includes(".");
    }

    private containsPointInLastChar(email: string): boolean {
        return email.charAt(email.length-1) === '.';
    }
}