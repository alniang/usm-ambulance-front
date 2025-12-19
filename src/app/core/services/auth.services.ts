import { inject, Injectable } from "@angular/core";
import { Auth, authState, signInWithEmailAndPassword } from "@angular/fire/auth";
import { from, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private firebaseAuth = inject(Auth);

  user$ = authState(this.firebaseAuth);

  login(email: string, password: string): Observable<any> {
    const promise = signInWithEmailAndPassword(
        this.firebaseAuth, 
        email, 
        password
    );
    return from(promise)
  }

  logout() {
    return from(this.firebaseAuth.signOut());
  }
  
}