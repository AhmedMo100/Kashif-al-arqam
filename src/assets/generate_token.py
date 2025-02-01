import jwt
import time

# المفتاح السري والتشفير
SECRET_KEY = "3IBV05LrqPzJmRJ8Fui3Z1rTcylX107"
ALGORITHM = "HS256"

def generate_jwt_token():
    payload = {
        "sub": "lookup_user",  # معرف المستخدم
        "name": "search_request",  # اسم الطلب
        "exp": int(time.time()) + 3600  # صلاحية لمدة 1 ساعة
    }
    token = jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)
    return token

# تشغيل الكود وطباعة التوكن
jwt_token = generate_jwt_token()
print("Generated JWT Token:", jwt_token)
