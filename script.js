function showDisabilityInfo(disabilityType) {
  // حذف المحتوى الحالي
  document.body.innerHTML = "";

  // محتوى الإعاقة البصرية
  if (disabilityType === "visual") 
  {
    const lessonText = `
      <div class="disability-box">
        <h2>درس: حياة التنقل والترحال قبل اكتشاف الزراعة</h2>
        <p><strong>مقدمة:</strong><br>
        قبل اكتشاف الزراعة، كان الإنسان يعيش حياة بدوية، يتنقل من مكان إلى آخر بحثًا عن الطعام والماء. لم يكن هناك استقرار في حياته، حيث كان يعتمد على الصيد وجمع الثمار كمصادر أساسية للغذاء.
        </p>
        <p><strong>حياة الإنسان قبل الزراعة:</strong><br>
        كان الإنسان في العصور القديمة يعتمد على التنقل المستمر في رحلات بحثًا عن الموارد الغذائية. كانت هذه الحياة تقوم على جمع الثمار، الصيد، والمسكن.
        </p>
        <p><strong>أسباب التنقل والترحال:</strong><br>
        كانت الموارد محدودة وكان يجب التنقل للحصول على الطعام والماء.
        </p>
        <p><strong>اكتشاف الزراعة:</strong><br>
        مع الزراعة، بدأ الإنسان في الاستقرار في مكان واحد وزراعة المحاصيل.
        </p>
        <p><strong>نتائج اكتشاف الزراعة:</strong><br>
        الاستقرار، التطور الاجتماعي، النمو السكاني.
        </p>
        <p><strong>خاتمة:</strong><br>
        الحياة كانت مليئة بالتحديات ولكن مع اكتشاف الزراعة أصبح الإنسان يعيش في استقرار.
        </p>
      </div>
      <button class="return-btn" onclick="goBack()">العودة إلى الصفحة الرئيسية</button>
    `;

    // عرض المحتوى
    document.body.innerHTML = lessonText;

    // تشغيل الصوت
    const audio = document.createElement("audio");
    audio.src = "Untitled-ar-EG.mp3";
    audio.autoplay = true;
    document.body.appendChild(audio);
  }

  // محتوى الإعاقة السمعية
  else if (disabilityType === "hearing") 
  {
    const lessonText = `
      <div class="disability-box">
        <h2>درس: حياة التنقل والترحال قبل اكتشاف الزراعة</h2>
        <div class="video-container">
          <!-- الفيديو الأول: الشرح النصي -->
          <div class="video-box">
            <video controls autoplay>
              <source src="deaf.mp4" type="video/mp4">
              <track src="lesson-captions.srt" kind="subtitles" srclang="ar" label="Arabic">
              متصفحك لا يدعم الفيديو.
            </video>
            <p>هذا الفيديو يقدم شرحًا نصيًا حول حياة الإنسان قبل اكتشاف الزراعة.</p>
          </div>
          <!-- الفيديو الثاني: لغة الإشارة -->
          <div class="video-box">
            <video controls autoplay>
              <source src="sign-language-lesson.mp4" type="video/mp4">
              متصفحك لا يدعم الفيديو.
            </video>
            <p>هذا الفيديو يشرح بلغة الإشارة.</p>
          </div>
        </div>
      </div>
      <button class="return-btn" onclick="goBack()">العودة إلى الصفحة الرئيسية</button>
    `;

    // عرض المحتوى
    document.body.innerHTML = lessonText;
  }
}

function goBack() 
{
  location.reload();
}
