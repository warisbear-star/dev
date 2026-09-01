"use client";

import { useState } from "react";
import { CheckCircle2, Circle, Trophy, XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { ConceptQuiz } from "@/types/quiz";

interface ConceptQuizBlockProps {
  quiz: ConceptQuiz;
}

export function ConceptQuizBlock({ quiz }: ConceptQuizBlockProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const totalQuestions = quiz.questions.length;
  const answeredCount = Object.keys(answers).length;
  const revealedCount = Object.keys(revealed).length;
  const score = quiz.questions.reduce(
    (total, question, index) =>
      total + (revealed[index] && answers[index] === question.correctIndex ? 1 : 0),
    0,
  );
  const progress = totalQuestions ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  return (
    <section id="quiz" className="surface-muted scroll-mt-20 rounded-2xl border p-6 shadow-sm">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">
            📝 ทดสอบความเข้าใจ
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            เลือกคำตอบ แล้วเปิดเฉลยเพื่อดูผลลัพธ์
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-sm font-medium">
          <Trophy className="size-4 text-primary" />
          <span>{score}/{totalQuestions} คะแนน</span>
        </div>
      </div>

      <div className="mb-6 rounded-xl border bg-background/70 p-4">
        <div className="mb-2 flex items-center justify-between text-xs font-medium text-muted-foreground">
          <span>ความคืบหน้า</span>
          <span>{answeredCount}/{totalQuestions} ข้อ · {progress}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      {revealedCount === totalQuestions && totalQuestions > 0 && (
        <div className="mb-6 flex items-center gap-3 rounded-xl border bg-primary/5 p-4 animate-in fade-in slide-in-from-top-2 duration-500">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Trophy className="size-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold">ทำแบบทดสอบครบแล้ว! 🎉</p>
            <p className="text-sm text-muted-foreground">คุณได้ {score} จาก {totalQuestions} คะแนน</p>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {quiz.questions.map((q, qIndex) => {
          const selected = answers[qIndex];
          const isRevealed = revealed[qIndex];
          const isCorrect = selected === q.correctIndex;

          return (
            <div
              key={qIndex}
              className={`group space-y-3 rounded-xl border bg-background/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${isRevealed ? "ring-1 ring-primary/20" : ""}`}
            >
              <div className="flex items-start gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary transition-transform duration-300 group-hover:scale-110">
                  {qIndex + 1}
                </span>
                <p className="pt-1 font-medium">{q.question}</p>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {q.options.map((option, oIndex) => {
                  let variant: "outline" | "default" | "destructive" = "outline";
                  if (isRevealed) {
                    if (oIndex === q.correctIndex) variant = "default";
                    else if (oIndex === selected) variant = "destructive";
                  } else if (selected === oIndex) {
                    variant = "default";
                  }

                  return (
                    <Button
                      key={oIndex}
                      variant={variant}
                      className={`h-auto justify-start whitespace-normal px-4 py-3 text-left text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${selected === oIndex && !isRevealed ? "scale-[1.01] ring-2 ring-primary/30" : ""}`}
                      disabled={isRevealed}
                      onClick={() => setAnswers((prev) => ({ ...prev, [qIndex]: oIndex }))}
                    >
                      {isRevealed && oIndex === q.correctIndex && (
                        <CheckCircle2 className="mr-2 size-4 shrink-0" />
                      )}
                      {isRevealed && oIndex === selected && oIndex !== q.correctIndex && (
                        <XCircle className="mr-2 size-4 shrink-0" />
                      )}
                      {!isRevealed && selected === oIndex && (
                        <Circle className="mr-2 size-4 shrink-0 fill-current" />
                      )}
                      {option}
                    </Button>
                  );
                })}
              </div>
              {selected !== undefined && !isRevealed && (
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setRevealed((prev) => ({ ...prev, [qIndex]: true }))}
                >
                  ดูเฉลย
                </Button>
              )}
              {isRevealed && (
                <p
                  className={`prose-content text-sm animate-in fade-in slide-in-from-top-2 duration-300 ${isCorrect ? "text-success" : "text-muted-foreground"}`}
                >
                  {isCorrect ? "✓ ถูกต้อง! " : "✗ ยังไม่ถูก — "}
                  {q.explanation}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
