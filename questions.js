// Define questions array in a way that works in both browser and module environments
(function(global) {
    // Original questions array
    const questions = [
        // Set 1
        {
            question: "من أنواع الأنظمة المنظمة للعمل في مجال الحاسب وتقنية المعلومات في المملكة:",
            options: [
                "نظام الاتصالات وتقنية المعلومات",
                "نظام مكافحة جرائم الإنترنت",
                "نظام حماية الملكية الفكرية",
                "جميع ما سبق"
            ],
            correctAnswer: 4,
            score: 1.0
        },
        {
            question: "المرادف المماثل للمصطلح الجرائم الإلكترونية هو:",
            options: [
                "جرائم الإنترنت",
                "الجرائم المعلوماتية",
                "جرائم الاتصالات",
                "جميع ما سبق"
            ],
            correctAnswer: 4,
            score: 1.0
        },
        {
            question: "من أهم الضوابط التوجيهية المتعلقة بالأمن السيبراني على المستوى الوطني:",
            options: [
                "تعزيز تنافسية قطاع الاتصالات والمعلومات",
                "معالجة البيانات الشخصية عبر الإنترنت",
                "الضوابط الأساسية للأمن السيبراني",
                "جميع ما سبق"
            ],
            correctAnswer: 4,
            score: 1.0
        },
        {
            question: "من الجهود التي قامت بها الهيئة السعودية للملكية الفكرية لتعزيز حماية الملكية الفكرية:",
            options: [
                "تطوير منظومة الإنفاذ",
                "تفعيل دور القطاع الخاص",
                "رفع نسبة الامتثال للأنظمة والقوانين",
                "جميع ما سبق"
            ],
            correctAnswer: 4,
            score: 1.0
        },
        {
            question: "من المبادئ العامة في الميثاق قواعد السلوك والممارسة المهنية لمجال الحاسب وتقنية المعلومات:",
            options: [
                "الانتباه للعواقب الاجتماعية للبرنامج الذي يطور",
                "الصدق والثقة",
                "مراجعة النظراء وأصحاب المصلحة",
                "حماية المشروع من الدعاوى"
            ],
            correctAnswer: 1,
            score: 1.0
        },
        {
            question: "تتلخص أهمية تحليل السوق في:",
            options: [
                "فهم الوضع الراهن ومستقبل الوضع الاقتصادي",
                "تحسين جودة المنتجات",
                "ملف قانوني",
                "تقليد المشاريع"
            ],
            correctAnswer: 1,
            score: 1.0
        },
        {
            question: "من الطرق الأساسية لاختيار الفرص الاستثمارية:",
            options: [
                "آراء الأصدقاء",
                "فجوات السوق",
                "عدم النظر للمشكلات",
                "البدء دون بحث"
            ],
            correctAnswer: 2,
            score: 1.0
        },
        {
            question: "وثيقة تحتوي على مجموعة من العناصر والخطط تمثل خارطة طريق لتنفيذ الفكرة على الواقع وتحقيق أهداف واستراتيجيات المشروع:",
            options: [
                "ملخص المشروع",
                "نظرة على المشروع",
                "خطة العمل",
                "المنتج أو الخدمة المقدمة"
            ],
            correctAnswer: 3,
            score: 1.0
        },
        {
            question: "من المكونات الأساسية لنموذج الأعمال:",
            options: [
                "الخطة التشغيلية",
                "خطة التطوير",
                "الخطة التسويقية",
                "رسالة المؤسسة"
            ],
            correctAnswer: 4,
            score: 1.0
        },
        {
            question: "من عناصر خطة عمل المشروع الريادي:",
            options: [
                "الملخص التنفيذي",
                "خطة التطوير",
                "تحديد القيمة المضافة",
                "رسالة المؤسسة"
            ],
            correctAnswer: 1,
            score: 1.0
        },
        {
            question: "أحد مكونات الخطة التسويقية:",
            options: [
                "تحليل الوضع الحالي",
                "الملخص التنفيذي",
                "رسالة المؤسسة",
                "كل ما سبق"
            ],
            correctAnswer: 4,
            score: 1.0
        },
        {
            question: "من عوامل نجاح خطة العمل:",
            options: [
                "رسالة المؤسسة",
                "لا شيء مما سبق",
                "تحديد الغرض والرؤية للمشروع",
                "جميع ما سبق"
            ],
            correctAnswer: 4,
            score: 1.0
        },
        {
            question: "من مراحل تكوين فرق العمل:",
            options: [
                "مرحلة ما قبل العمل",
                "إيجاد بيئة عمل جيدة",
                "تكوين وبناء الفريق",
                "كل ما سبق"
            ],
            correctAnswer: 4,
            score: 1.0
        },
        {
            question: "من مزايا النموذج الأولي:",
            options: [
                "اختبار الأداء والوظائف",
                "النمطية",
                "لا توجد مخاطرة",
                "الشكل القانوني غير واضح"
            ],
            correctAnswer: 1,
            score: 1.0
        },
        {
            question: "من عيوب النماذج الأولية:",
            options: [
                "البساطة",
                "قابلية التعديل",
                "قيود التصنيع",
                "مرئية"
            ],
            correctAnswer: 3,
            score: 1.0
        },
        {
            question: "من دوافع إنشاء المشاريع الريادية:",
            options: [
                "توفر فرص وظيفية",
                "البطالة",
                "المنافسة سهلة",
                "اشغال وقت فراغ"
            ],
            correctAnswer: 2,
            score: 1.0
        },
        {
            question: "من أشكال النماذج الرقمية:",
            options: [
                "الذكاء الاصطناعي",
                "تصميم بدون أبعاد",
                "فيديو ثلاثي الأبعاد",
                "تصميم غير هندسي"
            ],
            correctAnswer: 3,
            score: 1.0
        },
        {
            question: "الخطوات والمراحل التي يمر بها إطلاق المشروع الريادي هي:",
            options: [
                "سبع مراحل",
                "ثماني مراحل",
                "تسع مراحل",
                "عشر مراحل"
            ],
            correctAnswer: 2,
            score: 1.0
        },
        {
            question: "المرحلة الثانية من مراحل دورة حياة المشروع الريادي هي:",
            options: [
                "النضج",
                "الإطلاق",
                "التنفيذ",
                "الحصاد"
            ],
            correctAnswer: 2,
            score: 1.0
        },
        {
            question: "من متطلبات وإجراءات إقامة مشروع ريادي في المملكة:",
            options: [
                "الحصول على التمويل اللازم",
                "تسجيل براءة اختراع الفكرة",
                "الحصول على التراخيص اللازمة",
                "استقدام العمالة اللازمة"
            ],
            correctAnswer: 3,
            score: 1.0
        },
        {
            question: "يتم دراسة الفكرة وبناؤها باستخدام:",
            options: [
                "منهجية MVP",
                "منهجية CVP",
                "منهجية VMP",
                "بي بي ام"
            ],
            correctAnswer: 1,
            score: 1.0
        },
        {
            question: "تحديد معايير الأداء المناسبة للمشروع:",
            options: [
                "دراسة الفكرة وبناؤها",
                "تحسين الأداء",
                "تقييم الأداء",
                "تحليل البيانات"
            ],
            correctAnswer: 3,
            score: 1.0
        },
        {
            question: "يمكن تحديد الحد الأدنى من المنتج القابل للتطبيق من خلال:",
            options: [
                "التوافق مع الأهداف الاستراتيجية",
                "البدء بحل مشاكل محددة",
                "وضع خطة عمل تطويرية",
                "كل ما سبق"
            ],
            correctAnswer: 4,
            score: 1.0
        },
        {
            question: "من عناصر متابعة تنفيذ المشروع الريادي:",
            options: [
                "الإطلاق الأولي",
                "تقييم الأداء",
                "التحليل والتقييم",
                "التعديل والتحسين"
            ],
            correctAnswer: 2,
            score: 1.0
        },
        {
            question: "يمثل معيار الاستفادة من مزايا التكامل داخل المشروع أحد تحديات الاستثمار في مجال الحاسب.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.0
        },
        {
            question: "تمثل التكنولوجيا القابلة للارتداء القطاع الأكبر والأسرع نموًا من حيث إيرادات إنترنت الأشياء.",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 1.0
        },
        {
            question: "إحدى التحديات الرئيسية التي تواجه مشاريع تكنولوجيا المعلومات هو الأمن السيبراني؛ نظرًا لندرة البيانات.",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 1.0
        },
        {
            question: "يعد الذكاء الاصطناعي أحد أهم المشاريع التقنية بالمملكة.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.0
        },
        {
            question: "يتفوق معدل التحول التكنولوجي عن معدل التدريب وعدد المتخصصين المهرة في تكنولوجيا المعلومات.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.0
        },
        {
            question: "الهيئة السعودية للملكية الفكرية مسؤولة عن تعزيز الابتكار في المملكة وتحسين قدرة الاقتصاد الرقمي على المنافسة.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.0
        },
        {
            question: "استخدام الهاتف النقال لالتقاط صورة أو تسجيل فيديو أو صوت دون علم الشخص أو موافقته لا يعد اختراقا لخصوصية الأشخاص ولا يعاقب عليها القانون.",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 1.0
        },
        {
            question: "تتفق هيئة الحوسبة الآلية مع جمعية مهندسي الكهرباء والإلكترونيات في المبادئ الأخلاقية والسلوكية للمشتغلين بمجال الحاسب وتقنية المعلومات.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.0
        },
        {
            question: "من أخلاقيات استخدام الإنترنت إظهار تفاصيل المعلومات الشخصية ومشاركتها مع الآخرين.",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 1.0
        },
        {
            question: "في بيئة الحوسبة والمعلومات، التسليم بأن جميع البشر أصحاب مصلحة في الحوسبة، أحد مبادئ وثيقة الأخلاق المهنية ACM/IEEE.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.0
        },
        {
            question: "توصف الفرص أنها مجموعة من العوامل والأوضاع الداخلية التي تساعد المؤسسة على تحقيق رسالتها.",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 1.0
        },
        {
            question: "الفرص السوقية هي منفعة أو حاجة لم تشبع بعد، ولدى الشركة أو المؤسسة إمكانية لتحقيق هذا الإشباع.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.0
        },
        {
            question: "ما يميز الفكرة الريادية عن الفكرة العادية هو إمكانية تحويلها إلى فرصة استثمارية عبر تحويلها لمنتج أو خدمة قابلة للبيع.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.0
        },
        {
            question: "لا تعد دراسة السوق المستهدف من الخطوات الأساسية لنجاح أي مشروع ناشئ.",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 1.0
        },
        {
            question: "أحد عناصر خطة العمل ضرورة وجود ملخص.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.0
        },
        {
            question: "لا يجب أن يكون لدى المشروع الريادي تمويل كافٍ لتطوير وتشغيل المشروع في الفترة الأولى.",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 1.0
        },
        {
            question: "يجب أن يقوم المشروع الريادي بالتحليل الدقيق للسوق وتحديد المنافسين وفهم احتياجات العملاء والعوائق التي يمكن أن تواجه المشروع.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.0
        },
        {
            question: "مدير المشروع الريادي هو المسؤول عن إدارة جميع الموارد المالية للمؤسسة، وإعداد وتحليل التقارير المالية، وإعداد الموازنات والتوقعات.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.0
        },
        {
            question: "عملية بناء الفريق هي عملية إدارية وتنظيمية تخلق من جماعة العمل وحدة متجانسة، متماسكة، متفاعلة، وفاعلة.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.0
        },
        {
            question: "في تحديد المخاطر يجب تسمية المخاطر المحتملة للمشروع والتفرقة بين المخاطر الرئيسة التي يمكن أن تفشل المشروع والمخاطر الثانوية التي تعتبر أقل ضررًا.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.0
        },
        {
            question: "يجب إنشاء نموذج أولي للمنتج أو الخدمة، ولكن لا يمكن اختباره مع العملاء المحتملين.",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 1.0
        },
        {
            question: "النماذج منخفضة الدقة هي تمثيل بسيط ومبسط للفكرة أو المفهوم العام المشروع أولي يركز على التوضيح الأساسي للمشروع دون التفاصيل الدقيقة.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.0
        },
        {
            question: "النماذج الرقمية يقصد بها التشكيلات المصنوعة من مجموعة متنوعة من المواد، مثل: الخشب أو الورق المقوى.",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 1.0
        },
        {
            question: "النماذج السريعة هي نماذج مبتكرة وسريعة الإنتاج تستخدم تقنيات حديثة، مثل: الطباعة ثلاثية الأبعاد؛ لإنشاء نماذج تجريبية بشكل سريع.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.0
        },
        {
            question: "الشركة الناشئة هي مؤسسة مؤقتة تبحث عن نموذج أعمال قابل للتطوير.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.0
        },
        {
            question: "يتم دراسة الفكرة وبناؤها باستخدام نموذج الأعمال.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.0
        },
        {
            question: "تستخدم فكرة تطبيق الحد الأدنى من المنتج القابل للتطبيق في التشغيل التجريبي.",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 1.0
        },
        {
            question: "تبدأ مراحل حياة المشروع الريادي بالتجهيزات.",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 1.0
        },
        {
            question: "إدارة المخاطر تتضمن تقييم المخاطر المحتملة وتحديد التدابير الوقائية والتصحيحية اللازمة للتعامل معها.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.0
        }
    ];
    // Make questions available globally
    global.questions = questions;

    // For localStorage fallback
    function saveQuestions() {
        try {
            localStorage.setItem('examQuestions', JSON.stringify(questions));
            console.log("Questions saved to localStorage");
        } catch (e) {
            console.error("Failed to save questions to localStorage:", e);
        }
    }

    function loadQuestions() {
        const savedQuestions = localStorage.getItem('examQuestions');
        if (savedQuestions) {
            try {
                const parsedQuestions = JSON.parse(savedQuestions);
                // Only overwrite if we have valid questions
                if (Array.isArray(parsedQuestions) && parsedQuestions.length > 0) {
                    return parsedQuestions;
                }
            } catch (e) {
                console.error("Error parsing questions from localStorage:", e);
            }
        }
        return questions; // Return original questions if localStorage failed
    }

    // Backwards compatibility with existing code
    global.getQuestion = function(index) {
        const loadedQuestions = loadQuestions();
        return loadedQuestions[index];
    };

    global.getTotalQuestions = function() {
        const loadedQuestions = loadQuestions();
        return loadedQuestions.length;
    };

    global.getMaxScore = function() {
        const loadedQuestions = loadQuestions();
        return loadedQuestions.reduce((total, q) => total + q.score, 0);
    };

    // Save questions to localStorage on load
    saveQuestions();

    // Log questions loaded for debugging
    console.log(`Loaded ${questions.length} questions`);

})(typeof window !== 'undefined' ? window : this); // This works in both browser and Node.js 