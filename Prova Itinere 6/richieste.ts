class InvalidTransitionError extends Error {
  public current_state: RequestState
  public target_state : RequestState
  
  constructor(message: string, current_state: RequestState, target_state : RequestState) {
  super(message)
  this.current_state = current_state
  this.target_state = target_state
  }
}
class InvalidOperationError extends Error{;} 


enum RequestState { // punteggi usati per la funzione score
  Draft = -1, // -1    
  Review = 0, // 0 
  Rejected = -2, // -2
  Approved = 1,// 1
  Archived = 3, // 3
}

class MyRequest{
    private readonly _title : string
    private _content : string
    private _state : RequestState
  constructor (title : string, content : string = "TBD"){
    this._title = title
   
    this._content = content
    

    this._state = RequestState.Draft
  }

  get title(): string { return this._title }
  get content(): string { return this._content}
  get state(): RequestState { return this._state }
  


  advance(new_state: RequestState): void {
    if (this._state === RequestState.Draft && new_state !== RequestState.Review) {
      throw new InvalidTransitionError("Da Draft puoi andare solo in Review", this._state, new_state)
    }
    if (this._state === RequestState.Rejected && new_state !== RequestState.Draft) {
      throw new InvalidTransitionError("Da Rejected puoi solo tornare in Draft", this._state, new_state)
    }
    
    if (this._state === RequestState.Approved && new_state !== RequestState.Archived) {
      throw new InvalidTransitionError("Da Approved puoi andare solo in Archived", this._state, new_state)
    }
    
    if (this._state === RequestState.Archived) {
      throw new InvalidTransitionError("Archived è uno stato finale", this._state, new_state)
    }
    
    if (this._state === RequestState.Review) {
      if (new_state !== RequestState.Rejected && new_state !== RequestState.Approved) {
        throw new InvalidTransitionError("Da Review devi andare in Rejected o Approved", this._state, new_state)
      }
    }



    this._state = new_state
  }
  set content(content : string){
    if((this._state == RequestState.Draft) || (this._state == RequestState.Rejected)){
      this._content = content
    }
    else{
      throw new InvalidOperationError("Operation not valid")
    }
  }
}




function score(requests : MyRequest[]) : number {
let score : number = 0
for(let i = 0; i< requests.length ; i++){
  score+= requests[i].state
}

return score

}