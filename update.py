import sqlite3

#read in a row.  Get it's categories.
#convert categories to title case
#remove duplicates
#update sql for that row



with sqlite3.connect("books.db") as conn:
    cur = conn.cursor()
    rows = cur.execute("select id, categories from book;").fetchall()
    print(type(rows))
for row in rows:
   print(type(row), row )
   print(type(row[0]), type(row[1]))
   if len(row) > 1 and type(row[1]) is str:
      new_set = set()
      new_set.update([cat.strip().title() for cat in row[1].split(',')])
      new_set.add("Own")
      new_str = ", ".join(map(str, new_set))
   else:
      new_str = ""
   print(new_str)
   with sqlite3.connect("books.db") as conn:
       cur = conn.cursor()
       query = f'update book set categories = "{new_str}" WHERE id={row[0]}'
       cur.execute(query)
       conn.commit()
#   print(query)
#    conn.commit()
