%Puzzle=[[0,14,10,35],[14,_,_,_],[15,_,_,_],[28,_,1,_]],
%puzzle_solution(Puzzle).
:- ensure_loaded(library(clpfd))

% main logic
puzzle_solution(Puzzle):-
    maplist(same_length(Puzzle), Puzzle),
    setRows(Puzzle, Rows), 
    append(Rows, Vs), 
    Vs ins 1..9,
    same_diagonal(Rows, _Value),
    maplist(all_distinct, Rows),
    transpose(Rows, Columns),
    maplist(all_distinct, Columns),
    Puzzle = [_|Rest], product_sum(Rest),
    transpose(Puzzle, ColPuzzle),
    ColPuzzle = [_|Left], product_sum(Left).
   
%------------------------------------
% helper

%deleteHead(+Lst, -Lst)
deleteHead([Head|Lst], Lst).

%setRows(+Puzzle, -Rows)
setRows(Puzzle, Rows):-
    Puzzle = [_|Left],
    maplist(deleteHead, Left, Rows).

%same_diagonal(+Rows, ?Value).    
same_diagonal(Rows, Value):- 
	same_diagonal(Rows, Value, 0).

same_diagonal([],_,_).
same_diagonal([Row|Rows1], Value, Index0):-
    nth0(Index0, Row, Value),
    Index1 is Index0 + 1,
    same_diagonal(Rows1, Value, Index1).


%product_sum(+List)
product_sum([]).
product_sum([First|Rest]):-
    First = [Head|Left] ,
    (sumlist(Left, Head) ; product_list(Left, Head)),
    product_sum(Rest).    

%sumlist(+Left, ?Head)
sumlist(Left, Head):- sumlist(Left, Head, 0).

sumlist([], Head, Head).
sumlist([E1|Rest], Head, N0):-
    N1 #= N0 + E1,
    sumlist(Rest, Head, N1).

%product_list(+Left, ?Head)
product_list(Left, Head):- product_list(Left, Head, 1).

product_list([], Head, Head).
product_list([E1|Rest], Head, N0):-
    N1 #= N0 * E1,
    product_list(Rest, Head, N1).